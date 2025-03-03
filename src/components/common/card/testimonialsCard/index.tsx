import { ImQuotesRight } from "react-icons/im";
import {
  CardContainer,
  ImageDiv,
  QuoteText,
  StarsDiv,
  TestimonialsCardWrapper,
} from "./element";
import Card from "react-bootstrap/Card";
import { MdOutlineStar } from "react-icons/md";
import { Image } from "react-bootstrap";
import { femaleuser, user } from "assets";

function TestimonialsCard({ data }) {
  return (
    <TestimonialsCardWrapper>
      <CardContainer>
        <Card>
          <Card.Body>
            <ImQuotesRight className="icon" />
            <QuoteText>{data.text}</QuoteText>
            <StarsDiv>
              <MdOutlineStar className="star-icon" />
              <MdOutlineStar className="star-icon" />
              <MdOutlineStar className="star-icon" />
              <MdOutlineStar className="star-icon" />
              <MdOutlineStar className="star-icon" />
            </StarsDiv>
            <ImageDiv>
              {data.author === "male" ? (
                <Image fluid src={user} />
              ) : (
                <Image fluid src={femaleuser} className="female-user" />
              )}
              <p className="user-name">{data.name}</p>
            </ImageDiv>
          </Card.Body>
        </Card>
      </CardContainer>
    </TestimonialsCardWrapper>
  );
}

export default TestimonialsCard;
