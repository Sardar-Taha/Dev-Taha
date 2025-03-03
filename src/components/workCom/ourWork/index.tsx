import {
  OurWorkHeading,
  OurWorkImg,
  OurWorkProjectHeading,
  OurWorkProjectText,
  OurWorkText,
  OurWorkWrapper,
} from "./element";
import { MainCol, MainContainer, MainRow } from "components/common";
import { OurWorkData } from "components/data";
import { WorkModal } from "components/common";
import Worktabs from "./worktabs";
import { motion } from "framer-motion";

const OurWork = () => {
  return (
    <OurWorkWrapper>
      <MainContainer>
        <motion.div
          className="ourContainer"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <OurWorkHeading>Recent Work</OurWorkHeading>
          <OurWorkText>
            Check out some of recent projects I've worked on:
          </OurWorkText>
        </motion.div>

        <Worktabs />
      </MainContainer>
    </OurWorkWrapper>
  );
};

export default OurWork;
