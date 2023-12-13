import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteProd } from "../redux/action";
import EditProduct from "./EditProduct";

const AdminProductCard = ({ el }) => {
  const dispatch = useDispatch();
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
          <EditProduct el={el} />
          <Button
            variant="danger"
            style={{ margin: "5px" }}
            onClick={() => dispatch(deleteProd(el.id))}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AdminProductCard;
