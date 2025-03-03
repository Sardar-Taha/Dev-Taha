import React from "react";
import { ServicesCardIcon, ServicesCardWrapper } from "./element";
import Card from "react-bootstrap/Card";

const ServicesCard = ({ item, index }) => {
  return (
    <ServicesCardWrapper key={item.id} className="mb-4">
      <Card className={`${index < 3 && "margin-top"}`}>
        <Card.Body>
          <ServicesCardIcon>{item.icon}</ServicesCardIcon>
          <Card.Title>{item.heading}</Card.Title>
          <Card.Text>{item.text}</Card.Text>
        </Card.Body>
      </Card>
    </ServicesCardWrapper>
  );
};

export default ServicesCard;
