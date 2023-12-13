import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addProd } from "../redux/action";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProd = {
      id: Math.random(),
      name: name,
      price: price,
      imgUrl: imgUrl,
      discount: discount,
    };
    if (name && price && discount && imgUrl) {
      dispatch(addProd(newProd));
      handleClose();
      setName("");
      setPrice(0);
      setDiscount(0);
      setImgUrl("");
    } else {
      alert("Fill the required inputs");
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      {" "}
      <Button variant="primary" onClick={handleShow}>
        Add Product
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add product details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              placeholder="Product Name"
              style={{ margin: "5px" }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Control
              placeholder="Product Image"
              style={{ margin: "5px" }}
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
            />
            <Form.Control
              placeholder="Product Price"
              style={{ margin: "5px" }}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <Form.Control
              placeholder="Product Discount"
              style={{ margin: "5px" }}
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
            />
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddProduct;
