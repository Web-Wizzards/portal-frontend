/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import "./App.css";
import DiceAnimation from "./animations/diceAnimation/diceAnimation";
import { useSelector } from "react-redux";
import { RootState } from "./redux/reducers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/home/home";

function App() {
  const [logoAnimation, setIsLogoAnimation] = useState<boolean>(false);

  useEffect(() => {
    // setTimeout( () => {setIsLogoAnimation(false)}, 5000)
  }, []);

  const { device } = useSelector((state: RootState) => state.windowSize);
  console.log(device);
  return (
    <div className="App">
      <div>
        {
          logoAnimation ? <DiceAnimation /> 
          : 
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>}/>
            </Routes>
          </BrowserRouter>
        }
      </div>
    </div>
  );
}

export default App;
