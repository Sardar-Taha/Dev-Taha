import { TextContainer, WorkFlex } from "./element";
import { Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const WorkCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <WorkFlex key={item.id} onClick={() => navigate("/work")}>
      <Image src={item.img} />
      <TextContainer>
        <p>{item.text}</p>
      </TextContainer>
    </WorkFlex>
  );
};

export default WorkCard;
