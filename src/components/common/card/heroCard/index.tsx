import {
  HeroCardWrapper,
  HeroCardIcon,
  HeroCardHeading,
  HeroCardText,
} from "./styles";

const HeroCard = ({ item, index }) => {
  return (
    <div key={item.id}>
      <HeroCardWrapper className={index === 0 && "margin-class"}>
        <HeroCardIcon>{item.icon} </HeroCardIcon>
        <HeroCardHeading>{item.heading}</HeroCardHeading>
        <HeroCardText>{item.text}</HeroCardText>
      </HeroCardWrapper>
    </div>
  );
};

export default HeroCard;
