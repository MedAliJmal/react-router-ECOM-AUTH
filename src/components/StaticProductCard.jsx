import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const StaticProductCard = ({ el }) => {
  return (
    <div style={{ margin: "25px" }}>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={el.imgUrl}
          style={{ width: "18rem", height: "350px" }}
        />
        <Card.Body>
          <Card.Title>{el.name}</Card.Title>
          <Card.Text>
            <p style={{ textDecoration: "line-through", color: "red" }}>
              Starting price : {el.price} DT
            </p>
            <p style={{ color: "green" }}>
              {" "}
              New price : {el.price - (el.price / 100) * el.discount} DT
            </p>
          </Card.Text>
          <Link to={`/user/products/${el.id}`}>
            <Button variant="primary" style={{ margin: "5px" }}>
              Check Details
            </Button>
          </Link>
          <Button variant="outline-primary" style={{ margin: "5px" }}>
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StaticProductCard;
