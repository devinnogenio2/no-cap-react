import React from "react";
import Spline from "@splinetool/react-spline";
import LandingPageStyle from "./landingPageStyle";

const LandingPage = () => {
  return (
    <LandingPageStyle>
      <Spline
        className="splines"
        scene="https://prod.spline.design/pp4-zXDMckKyaJiA/scene.splinecode"
      />
      <div className="text">
        <div>No Cap: The Anonymous Poll App</div>
        <div>The Safe and Secure Way to Poll Your Friends</div>
      </div>
    </LandingPageStyle>
  );
};

export default LandingPage;
