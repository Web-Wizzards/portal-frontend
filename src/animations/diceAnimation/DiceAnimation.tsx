// import React, { useEffect } from "react";
// import "./diceAnimation.scss";
// import bgVideo from "../../assets/visualEffects/circuit.mp4";

// const DiceAnimation: React.FC = () => {
//   useEffect(() => {});

//   return (
//     <div className="animation-container">
//       <div className="bgOverlay"></div>
//       <video className="video" autoPlay loop muted src={bgVideo}></video>
//       <div className="dice-container">
//         <div className="cube one rotate-cube">
//           <div className="face top"></div>
//           <div className="face right"></div>
//           <div className="face bottom"></div>
//           <div className="face left first"></div>
//           <div className="face front"></div>
//           <div className="face back"></div>
//         </div>
//         <div className="cube two rotate-cube">
//           <div className="face top"></div>
//           <div className="face right"></div>
//           <div className="face bottom"></div>
//           <div className="face left"></div>
//           <div className="face front"></div>
//           <div className="face back"></div>
//         </div>
//       </div>

//       <div className="content">
//         {/* <div className="rotating-text">
//           <div className="text1">Celebrating</div>
//           <div className="text2">25 Years</div>
//           <div className="text3">OF</div>
//         </div> */}
//         <h2 className="one">SHAASTRA</h2>
//         <h2 className="two">SHAASTRA</h2>
//       </div>

//       <div id="particles-js"></div>
//     </div>
//   );
// };

// export default DiceAnimation;


import React, { useEffect } from "react";
import "./diceAnimation.scss";
// import bgVideo from "../../assets/visualEffects/S242_pc.mp4";
// import bgVideoMobile from "../../assets/visualEffects/S242_Mobile.mp4";
// import bgVideoTab from "../../assets/visualEffects/S242_Tablet.mp4";
// import { useSelector } from "react-redux";
// import { RootState } from "../../redux/reducers";

const DiceAnimation: React.FC = () => {
  useEffect(() => {});

  // const { device } = useSelector((state: RootState) => state.windowSize);
  return (
    <div className="animation-container">
      <div className="bgOverlay"></div>
      {/* <video
        className="video"
        autoPlay
        muted
        src={device === "laptop" ? bgVideo : device === "tab" ? bgVideoTab : bgVideoMobile}
      ></video> */}
    </div>
  );
};

export default DiceAnimation;
