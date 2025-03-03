import { MainCol, MainContainer, MainRow } from "components/common";
import {
  FlexDiv,
  ServicesWrapper,
  WorkButton,
  WorkHeading,
  WorkText,
} from "./styles";
import ServicesCard from "components/common/card/servicesCard";
import { servicesCardData } from "components/data";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  return (
    <ServicesWrapper id="services">
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
                Services
              </WorkHeading>
            </div>
            {/* <WorkButton
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                VIEW ALL
              </WorkButton> */}
          </FlexDiv>

          <WorkText
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            SERVICES FOR YOU
          </WorkText>
        </motion.div>

        <MainRow>
          {servicesCardData.map((item, index) => (
            <MainCol lg={4}>
              <motion.div
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.5 }}
              >
                <ServicesCard item={item} index={index} />
              </motion.div>
            </MainCol>
          ))}
        </MainRow>
      </MainContainer>
    </ServicesWrapper>
  );
};

export default ServicesSection;
