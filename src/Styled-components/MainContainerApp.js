import styled from "styled-components";
import { motion } from "framer-motion";

import { media } from "./GlobalStyles";

export const MainContainerApp = styled(motion.div)`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 32px 0px 32px 32px;
  background-color: ${({ theme }) => theme.colors.bgColor};
  display: flex;

  ${media.tablet} {
    display: block;
    padding: 23px 0 0 24px;
  }
  ${media.phone} {
    padding: 0px 0px 23px 0px;
  }
`;
