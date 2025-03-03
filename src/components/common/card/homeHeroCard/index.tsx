import { Card } from "react-bootstrap";
import { BorderBottom, HomeHeroWrapper } from "./element";
import { FaPencilAlt } from "react-icons/fa";
import { motion } from "framer-motion";

function HomeHeroCard({ item }) {
  return (
    <HomeHeroWrapper>
      <Card>
        <Card.Body>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.45 }}
          >
            {item.icon}
          </motion.div>
          <BorderBottom
            initial={{ opacity: 0, width: "0" }}
            whileInView={{ opacity: 1, width: "50px" }}
            transition={{ duration: 1, delay: 0.45 }}
          />

          <Card.Title>{item.header}</Card.Title>
          <Card.Text>{item.text} </Card.Text>
        </Card.Body>
      </Card>
    </HomeHeroWrapper>
  );
}

export default HomeHeroCard;
