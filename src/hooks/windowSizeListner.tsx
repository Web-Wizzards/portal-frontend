import React, { useEffect } from "react";
import { setWindowSize } from "../redux/actions";
import { Device } from "../types/device";
import { useDispatch } from "react-redux";

const WindowSizeListner: React.FC = () => {
  const dispatch = useDispatch();

  const handleResize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    var device: Device = "laptop";

    if (width <= 760 && width > 450) {
      device = "tab";
    } else if (width <= 450) {
      device = "mobile";
    }

    dispatch(setWindowSize(width, height, device));
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return null;
};

export default WindowSizeListner;
