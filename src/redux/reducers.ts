import { combineReducers } from "redux";
import { WindowSize } from "../types/device";

export interface RootState {
  windowSize: WindowSize;
}

const initialWindowSize: WindowSize = {
  width: window.innerWidth,
  height: window.innerHeight,
  device: window.innerWidth > 1024 ?  'laptop' : window.innerWidth <= 1024 && window.innerWidth > 780 ? "tab" : "mobile"
};

type Action = {
  type: string;
  payload?: any;
};

const windowSizeReducer = (state = initialWindowSize, action: Action) => {
  switch (action.type) {
    case "SET_WINDOW_SIZE":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers<RootState>({
  windowSize: windowSizeReducer,
});

export default rootReducer;
