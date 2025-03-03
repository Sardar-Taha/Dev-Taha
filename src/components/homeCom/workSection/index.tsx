import { MainCol, MainContainer, MainRow } from "components/common";
import {
  FlexDiv,
  WorkWrapper,
  WorkButton,
  WorkHeading,
  WorkText,
} from "./element";
import { workCardData } from "components/data";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import WorkCard from "components/common/card/workCard";

const WorkSection = () => {
  return (
    <WorkWrapper id="work">
      <MainContainer>
        <motion.div>
          <FlexDiv>
            <div className="flex">
              <motion.div
                className="border-div"
                initial={{ opacity: 0, width: "0px" }}
                whileInView={{ opacity: 1, width: "100px" }}
                transition={{ duration: 0.5, delay: 0.15 }}
              />
              <WorkHeading
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                Work
              </WorkHeading>
            </div>
            <Link to="/work">
              <WorkButton
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                VIEW ALL
              </WorkButton>
            </Link>
          </FlexDiv>

          <WorkText
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            SOME OF THINGS I'VE MADE
          </WorkText>
        </motion.div>
      </MainContainer>

      <MainRow>
        {workCardData.map((item, index) => (
          <MainCol className={"main-col"}>
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 1 }}
            >
              <WorkCard item={item} />
            </motion.div>
          </MainCol>
        ))}
      </MainRow>
    </WorkWrapper>
  );
};

export default WorkSection;
