/* Assuming you are using styled-components */
import styled from "styled-components";

const LandingPageStyle = styled.div`
  /* Set the container to cover the whole viewport */
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .spline-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1; /* Place the spline image behind the text */
  }

  .splines {
    width: 100%;
    height: 100%;
  }

  .text {
    text-align: center;
    color: white;
    z-index: 1; /* Place the text above the spline image */
    position: relative;
  }
`;

export default LandingPageStyle;
