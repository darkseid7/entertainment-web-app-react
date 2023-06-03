import { useEffect, useRef } from "react";
import anime from "animejs";

import styled from "styled-components";

const StyledAlertMessage = styled.div`
  padding: 16px;
  border-radius: 8px;
  top: 40px;
  right: 16px;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.buttonColor};
  cursor: pointer;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.fontColor};
`;

function AlertMessage({ text, visible, setVisible }) {
  const message = useRef(null);

  const handleClick = () => {
    // Ocultar la alerta al hacer clic
    setVisible(false);
  };
  useEffect(() => {
    anime({
      targets: message.current,
      opacity: [0, 1],
      translateY: [-100, 20],
      delay: anime.stagger(100),
      easing: "easeOutExpo",
    });
  }, [visible]);

  return (
    <>
      {visible && (
        <StyledAlertMessage onClick={handleClick} ref={message}>
          <Text>{text}</Text>
        </StyledAlertMessage>
      )}
    </>
  );
}

export default AlertMessage;
