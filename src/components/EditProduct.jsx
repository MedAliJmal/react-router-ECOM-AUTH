import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editProd } from "../redux/action";

const EditProduct = ({ el }) => {
  const [name, setName] = useState(el.name);
  const [imgUrl, setImgUrl] = useState(el.imgUrl);
  const [price, setPrice] = useState(el.price);
  const [discount, setDiscount] = useState(el.discount);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const handleEdit = (e) => {
    e.preventDefault();
    const editedProd = {
      id: el.id,
      name: name,
      price: price,
      imgUrl: imgUrl,
      discount: discount,
    };
    if (name && price && discount && imgUrl) {
      dispatch(editProd(editedProd));
      handleClose();
    } else {
      alert("Fill the required inputs");
    }
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow} style={{ margin: "5px" }}>
        Edit
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit product details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleEdit}>
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

export default EditProduct;
