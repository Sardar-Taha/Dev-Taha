import { MainCol, MainContainer, MainRow } from "components/common";
import {
  HeroButton,
  HeroHeading,
  HeroSectionWrapper,
  HeroCreativeText,
  TextDiv,
  MapDiv,
  InspirationWrapper,
  BorderBottom,
  MapImgDiv,
  MainWrapper,
} from "./styled";
import Lottie from "react-lottie";
import { heroCardData } from "components/data";
import { HeroCard, HomeHeroCard } from "components/common/card";
import { Navbar } from "components/common";
import { useEffect, useRef } from "react";
import { init } from "ityped";
import { motion } from "framer-motion";
import { FaHandshake, FaPencilAlt } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { BsLightning } from "react-icons/bs";
import { heroLottie, map } from "assets";
import { Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const cardsData = [
  {
    id: 1,
    icon: <FaPencilAlt className="hero-icon" />,
    header: "Creative Design",
    text: "Blending artistry to create memorable & boundary-pushing designs.",
  },
  {
    id: 2,
    icon: <IoDiamondOutline className="hero-icon" />,
    header: "Pixel Perfect Coding",
    text: `Pixel-perfect designs for memorable experiences.`,
  },
  {
    id: 3,
    icon: <BsLightning className="hero-icon" />,
    header: "Performance Optimization",
    text: "Optimizing website performance for optimal loading and rendering.",
  },
  {
    id: 4,
    icon: <FaHandshake className="hero-icon" />,
    header: "Long Term Support",
    text: "Providing responsive support for client satisfaction.",
  },
];

function HeroSection() {
  const textRef = useRef();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: heroLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      color: "#fff",
    },
  };

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      strings: [
        "Frontend Magician.",
        "Problem Solver.",
        "Visual Storyteller.",
        "Pixel Perfectionist.",
        "Knowledge Seeker.",
        "Continuous Learner.",
        "Big Thinker.",
        "Dream Chaser.",
      ],
    });
  }, []);

  const navigate = useNavigate();

  return (
    <MainWrapper id="hero">
      <HeroSectionWrapper>
        <Navbar />
        <MainContainer className="top-container">
          <MainRow>
            <MainCol lg={7}>
              <TextDiv
                initial={{ opacity: 0, x: -300, scale: 0.1, y: -100 }}
                animate={{ opacity: 1, x: 0, scale: 1, y: 0 }}
                transition={{
                  delay: 0.5,
                  type: "spring",
                  stiffness: 220,
                }}
                exit={{ transition: { duration: 0.2 } }}
              >
                <HeroCreativeText>
                  CREATIVE MIND, CREATIVE WORKS.
                </HeroCreativeText>
                <HeroHeading>
                  Hey, I'm Taha - <br /> A &nbsp;
                  <span ref={textRef}></span>
                </HeroHeading>
              </TextDiv>
              {/* <HeroButton
                initial={{ opacity: 0, x: -300, scale: 0.1, y: -100 }}
                animate={{ opacity: 1, x: 0, scale: 1, y: 0 }}
                transition={{
                  delay: 1,
                  type: "spring",
                  stiffness: 220,
                }}
                exit={{ transition: { duration: 0.2 } }}
              >
                GETTING STARTED
              </HeroButton> */}
            </MainCol>
            <MainCol lg={5}>
              <motion.div
                initial={{ opacity: 0, y: 200, scale: 0 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                }}
                exit={{ transition: { duration: 0.2 } }}
              >
                <Lottie options={defaultOptions} />
              </motion.div>
            </MainCol>
          </MainRow>
        </MainContainer>
      </HeroSectionWrapper>

      <MainContainer
        className="bottom-container"
        style={{ overflow: "hidden" }}
      >
        <MapDiv>
          <MainRow>
            {cardsData.map((item, index) => (
              <MainCol md={6} lg={6} xl={3}>
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <HomeHeroCard item={item} />
                </motion.div>
              </MainCol>
            ))}
          </MainRow>
        </MapDiv>
        <motion.div
          className="border-div"
          initial={{ opacity: 0, width: "0%" }}
          whileInView={{ opacity: 1, width: "100%" }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <InspirationWrapper>
          <MainRow>
            <MainCol lg={6} xl={5}>
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.15 }}
                className="about-text"
              >
                Philosophy
              </motion.p>
              <HeroHeading
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.35 }}
              >
                Inspiration Has No Borders
              </HeroHeading>
              <BorderBottom
                initial={{ opacity: 0, width: "0" }}
                whileInView={{ opacity: 1, width: "100px" }}
                transition={{ duration: 1, delay: 0.45 }}
              />
              <HeroCreativeText
                className="no-margin"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.55 }}
              >
                In the realm of web development, inspiration knows no borders.
                It fuels creativity, driving innovation beyond limitations. As a
                web developer, I blend diverse ideas, embracing a global
                perspective to craft unique digital experiences that leave a
                lasting impact.
              </HeroCreativeText>
            </MainCol>
            <MainCol lg={6} xl={7}>
              <MapImgDiv
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.25 }}
              >
                <Image fluid src={map} />
              </MapImgDiv>
            </MainCol>
          </MainRow>
          {/* <HeroButton className="mt-4" onClick={() => navigate("/about")}>
            More About Me
          </HeroButton> */}
        </InspirationWrapper>
      </MainContainer>
    </MainWrapper>
  );
}

export default HeroSection;
