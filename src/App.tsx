/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { RootState } from "./redux/reducers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/pages/home/home";

function App() {


  const { device } = useSelector((state: RootState) => state.windowSize);
  console.log(device);
  return (
    <div className="App">
      <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>}/>
            </Routes>
          </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
