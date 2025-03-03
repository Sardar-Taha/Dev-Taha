import { FaLaptopCode, FaRegPaperPlane } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { FcComboChart } from "react-icons/fc";
import { BsPencil } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { AiOutlineAntDesign, AiOutlineGlobal } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { TfiBarChart } from "react-icons/tfi";

import {
  workImgOne,
  workImgTwo,
  workImgThree,
  workImgFour,
  workImgFive,
  workImgSix,
  OurWorkImgOne,
  ea1,
  dalle1,
  gulfmarina1,
} from "assets";
import { MdEngineering, MdOutlineDeveloperMode } from "react-icons/md";
import { IoConstructOutline } from "react-icons/io5";

export const heroCardData = [
  {
    id: 1,
    icon: <FaRegPaperPlane />,
    heading: "Future Concept",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.​",
  },
  {
    id: 2,
    icon: <GiBrain />,
    heading: "The Big Ideas",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.​",
  },
  {
    id: 3,
    icon: <RiLightbulbFlashLine />,
    heading: "Creative Solutions",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.​",
  },
];

export const servicesCardData = [
  {
    id: 1,
    icon: <AiOutlineAntDesign />,
    heading: "UI/UX Design",
    text: "Elevating brands through intuitive and visually stunning UI/UX.",
  },
  {
    id: 2,
    icon: <FaLaptopCode />,
    heading: "Web Development",
    text: "Custom web development tailored to suit your unique business needs.​",
  },
  {
    id: 3,
    icon: <MdOutlineDeveloperMode />,
    heading: "Mobile App Development",
    text: "Seamless app development that keeps your users engaged and coming back for more.",
  },
  {
    id: 4,
    icon: <MdEngineering />,
    heading: "Search Engine Optimization (SEO)",
    text: "Boosting your online visibility and ranking in search engines.",
  },
  {
    id: 5,
    icon: <BsBookmark />,
    heading: "Consulting and Strategy",
    text: "Guiding your digital journey with expert consulting and strategic insights.",
  },
  {
    id: 6,
    icon: <IoConstructOutline />,
    heading: "Website Maintenance & Support",
    text: "Fast and responsive support to address any website issues promptly.",
  },
];

export const workCardData = [
  {
    id: 1,
    img: ea1,
    text: "Enter App",
  },
  {
    id: 2,
    img: workImgSix,
    text: "Pager",
  },
  {
    id: 3,
    img: gulfmarina1,
    text: "Gulf Marina",
  },
  {
    id: 4,
    img: workImgFour,
    text: "Vlapify",
  },
];

export const OurWorkData = [
  {
    id: 1,
    img: OurWorkImgOne,
    heading: "Project Name",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, fuga! Ratione explicabo odio accusantium eos! ",
  },
  {
    id: 2,
    img: OurWorkImgOne,
    heading: "Project Name",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, fuga! Ratione explicabo odio accusantium eos! ",
  },
  {
    id: 3,
    img: OurWorkImgOne,
    heading: "Project Name",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, fuga! Ratione explicabo odio accusantium eos! ",
  },
];

export const EducationData = [
  {
    id: 1,
    date: "2009 - 2019",
    heading: "Heading",
    subHeading: "sub heading",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indus dard dummy text ever since the 1500 when an uniknown prnter took galley of type and scrambled make specimen book has not only five centuries the into electronic.",
  },
  {
    id: 2,
    date: "2009 - 2019",
    heading: "Heading",
    subHeading: "sub heading",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indus dard dummy text ever since the 1500 when an uniknown prnter took galley of type and scrambled make specimen book has not only five centuries the into electronic.",
  },
  {
    id: 3,
    date: "2009 - 2019",
    heading: "Heading",
    subHeading: "sub heading",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indus dard dummy text ever since the 1500 when an uniknown prnter took galley of type and scrambled make specimen book has not only five centuries the into electronic.",
  },
];

export const ExperienceData = [
  {
    id: 1,
    date: "2009 - 2001 ",
    heading: "Heading",
    subHeading: "sub heading",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indus dard dummy text ever since the 1500 when an uniknown prnter took galley of type and scrambled make specimen book has not only five centuries the into electronic.",
  },
  {
    id: 2,
    date: "2009 - 2001 ",
    heading: "Heading",
    subHeading: "sub heading",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indus dard dummy text ever since the 1500 when an uniknown prnter took galley of type and scrambled make specimen book has not only five centuries the into electronic.",
  },
  {
    id: 3,
    date: "2009 - 2019",
    heading: "Heading",
    subHeading: "sub heading",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indus dard dummy text ever since the 1500 when an uniknown prnter took galley of type and scrambled make specimen book has not only five centuries the into electronic.",
  },
];

export const testimonialsData = [
  {
    id: 1,
    text: `He transformed our website into a seamless and visually appealing platform. Highly recommended!`,
    author: "female",
    name: "Aisha Mahmood",
  },
  {
    id: 2,
    text: `Abdul delivered a website that perfectly captures our brand. Thank you, Abdul!`,
    author: "male",
    name: "Ahmed Malik",
  },
  {
    id: 3,
    text: `His attention to detail and technical prowess in web development are impressive. He created a user-friendly website that perfectly aligns with our goals.`,
    author: "female",
    name: "Fatima Abbas",
  },
  {
    id: 4,
    text: `His  creativity and innovation, resulted in increased traffic and engagement for our website.`,
    author: "male",
    name: "Mark Roberts",
  },
  {
    id: 5,
    text: `We needed web app and he built an intuitive web app that has significantly improved our user experience.`,
    author: "male",
    name: "Michael Reynolds",
  },
  {
    id: 6,
    text: `Abdul's expertise in web development was invaluable in enhancing our online presence. He delivered a stunning website that resonates with our audience.`,
    author: "female",
    name: "Lisa Thompson",
  },
  {
    id: 7,
    text: `He took our website to the next level, incorporating modern design elements and ensuring seamless functionality.`,
    author: "male",
    name: "Faheem Ishtiaq",
  },
  {
    id: 8,
    text: `He delivered a website that perfectly represents our brand and captivates our target audience. Thank you, Abdul!`,
    author: "male",
    name: "Muhammad Faisal",
  },
  {
    id: 9,
    text: `It was pleasure working with him. Our website now stands out among the competition.`,
    author: "male",
    name: "Tom Cooper",
  },
  {
    id: 10,
    text: `Highly Recommended.`,
    author: "male",
    name: "William Harrison",
  },
];
