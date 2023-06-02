import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import anime from "animejs";

const spinAnimation = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #10141e;
  overflow: hidden;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 6px solid #161d2f;
  border-top-color: #fc4747;
  border-radius: 50%;
  animation: ${spinAnimation} 1s linear infinite;
`;

function Loader() {
  const spinner = useRef(null);
  useEffect(() => {
    anime({
      targets: spinner.current,
      opacity: [0, 1],
      duration: 1000,
      complete: () => {
        anime({
          targets: spinner.current,
          rotate: "1turn",
          easing: "linear",
          loop: true,
        });
      },
    });
  }, []);

  return (
    <LoaderContainer>
      <Spinner ref={spinner} />
    </LoaderContainer>
  );
}

export default Loader;
