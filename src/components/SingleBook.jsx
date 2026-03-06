import React, { useState } from "react";
import { Button, Card, Col } from "react-bootstrap";

function SingleBook({ book }) {
  const [selected, setSelected] = useState(false);

  return (
    <>
      <Card
        onClick={() => setSelected(!selected)}
        style={{ border: selected ? "3px solid red" : "1px solid #dee2e6", backgroundColor: selected ? "grey" : "white" }}
        className="h-100 shadow-sm book-card"
      >
        <div className="img-container">
          <Card.Img variant="top" src={book.img} style={{ objectFit: "cover", height: "440px" }} />
        </div>
        <Card.Body className="d-flex flex-column">
          <Card.Title>{book.title}</Card.Title>
          <div className="d-flex justify-content-between align-items-center ">
            <Card.Text className="fw-bold fs-6">€{book.price}</Card.Text>
            <Button variant="outline-success" size="sm">
              Dettagli
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default SingleBook;
