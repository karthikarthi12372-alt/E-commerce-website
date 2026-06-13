import React from "react";
import products from "../product";
import { useParams, Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find((p) => p._id === id);

  // ✅ safety check (prevents crash)
  if (!product) {
    return (
      <div className="container mt-4">
        <h2>Product Not Found</h2>
        <Link to="/" className="btn btn-dark mt-3">
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <div className="container">
      <Link to="/" className="btn btn-dark my-3">
        Go Back
      </Link>

      <Row>
        {/* Product Image */}
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>

        {/* Product Info */}
        <Col>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <h6>
                Rating: {product.rating} | Reviews: {product.numReviews}
              </h6>
            </ListGroup.Item>

            <ListGroup.Item>
              Description: {product.description}
            </ListGroup.Item>

            <ListGroup.Item>
              <h3>Price: ₹{product.price}</h3>
            </ListGroup.Item>
          </ListGroup>
        </Col>

        {/* Side Card */}
        <Col md={3}>
          <Card className="p-4">
            <ListGroup variant="flush">

              <ListGroup.Item>
                <Row>
                  <Col>Status</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Category</Col>
                  <Col>{product.category}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Brand</Col>
                  <Col>{product.brand}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  className="w-100"
                  disabled={product.countInStock === 0}
                  type="button"
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>

            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ProductDetails;