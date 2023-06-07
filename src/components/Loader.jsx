import styled from "styled-components";
import { motion } from "framer-motion";
import { ReactComponent as IconNavLogo } from "../assets/logo.svg";

const LoaderContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #10141e;
  overflow: hidden;
`;

function Loader() {
  return (
    <>
      <LoaderContainer>
        <motion.div
          initial={{ scale: 2 }}
          animate={{
            scale: [2, 2.2, 2],
            transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <IconNavLogo />
        </motion.div>
      </LoaderContainer>
    </>
  );
}

export default Loader;
