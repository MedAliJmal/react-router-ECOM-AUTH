import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  console.log(params);
  const { products } = useSelector((state) => state.productReducer);
  const details = products.find((el) => el.id === Number(params.id));
  return (
    <div
      style={{
        margin: "25px",
        backgroundColor: "white",
        border: "2px black solid",
        borderRadius: "15px",
        width: "700px",
        height: "800px",
      }}
    >
      <img
        src={details.imgUrl}
        alt="imageprod"
        style={{ height: "auto", width: "18rem" }}
      />
      <h1>{details.name}</h1>
      <p style={{ textDecoration: "line-through", color: "red" }}>
        Starting price : {details.price} DT
      </p>
      <p style={{ color: "green" }}>
        {" "}
        New price : {details.price -
          (details.price / 100) * details.discount}{" "}
        DT
      </p>
      <Button variant="outline-primary" style={{ margin: "5px" }}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductDetails;
