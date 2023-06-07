import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

import { media } from "../Styled-components/GlobalStyles";

const StyledAlertMessage = styled(motion.div)`
  width: 320px;
  padding: 16px;
  border-radius: 8px;
  top: 40px;
  right: 17.5px;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.buttonColor};
  cursor: pointer;

  ${media.phone} {
    top: 510px;
    right: 17.5px;
  }
`;

const Text = styled.p`
  font-size: 15px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.fontColor};
`;

function AlertMessage({ text, visible, setVisible }) {
  const handleClick = () => {
    setVisible(false);
  };

  return (
    <>
      <AnimatePresence>
        {visible && (
          <StyledAlertMessage
            onClick={handleClick}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              y: media.phone ? 0 : 20,
              x: media.phone ? -10 : 0,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.5,
            }}
          >
            <Text>{text}</Text>
          </StyledAlertMessage>
        )}
      </AnimatePresence>
    </>
  );
}

export default AlertMessage;
