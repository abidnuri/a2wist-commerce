import React from "react";
import { Card, Button } from "react-bootstrap";

const Product = ({ product }) => {
  const { image, title, price } = product;
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 my-5 cardResponsive">
      <Card className="cardStyle" style={{ width: "15rem", padding: "10px" }}>
        <Card.Img
          style={{ width: "100%", height: "220px" }}
          variant="top"
          src={image}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <div className="d-flex justify-content-between">
            <strong className="mr-1 text-primary">Price: ${price}</strong>
            <Button>Buy Now</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
