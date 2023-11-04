import { combineReducers } from "redux";
import { Device } from "../types/device";

interface WindowSize {
  width: number;
  height: number;
  device: Device
}

// interface OpenMessagePopup {
//   icon: string, 
//   message: string, 
//   category: 'info' | 'success' | 'warning', 
//   position: 'bottom-right' | 'bottom-center' | 'top-center' | 'top-right'
// }

interface Action {
  type: string;
  payload?: any;
}

const initialWindowSize: WindowSize = {
  width: window.innerWidth,
  height: window.innerHeight,
  device: window.innerWidth > 1024 ?  'laptop' : window.innerWidth <= 1024 && window.innerWidth > 780 ? "tab" : "mobile"
};

// const initialOpenMessagePopup: OpenMessagePopup = {
//   icon: "",
//   message: "",
//   category: "info",
//   position: "bottom-right"
// }

export type RootState = {
  windowSize: WindowSize,
  // openMessagePopup: OpenMessagePopup
}

const windowSizeReducer = (state = initialWindowSize, action: Action) => {
  switch (action.type) {
    case 'SET_WINDOW_SIZE':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

// const openMessagePopupReducer = (state = initialOpenMessagePopup, action: Action) => {
//   switch (action.type) {
//     case 'OPEN_MESSAGE_POPUP':
//       return { ...state, ...action.payload}
//     default:
//       return state;
//   }
// }

const rootReducer = combineReducers<RootState>({
  windowSize: windowSizeReducer,
  // openMessagePopup: openMessagePopupReducer,
  // Assign windowSizeReducer to windowSize property
  // Add other reducers as needed
});

export default rootReducer;