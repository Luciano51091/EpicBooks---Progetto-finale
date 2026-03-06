import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function AddComment({ asin }) {
  const [newComment, setNewComment] = useState({
    comment: "",
    rate: "1",
    elementId: asin,
  });

  const sendComment = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`, {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTliNjdjMGFmZWY0YzAwMTUwODI3OGQiLCJpYXQiOjE3NzI4MTExMDksImV4cCI6MTc3NDAyMDcwOX0.bZn6v4SBAlH-LEJfaxestsTvvXtQESHosUZcltXm2LU",
        },
      });

      if (response.ok) {
        alert("Recensione inviata!");
        setNewComment({
          comment: "",
          rate: 1,
          elementId: asin,
        });
      } else {
        throw new Error("Errore nel savataggio");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Form className="mt-3" onSubmit={sendComment}>
      <Form.Group className="mb-2">
        <Form.Control
          type="text"
          placeholder="Scrivi qui la tua recensione..."
          value={newComment.comment}
          onChange={(e) => setNewComment({ ...newComment, comment: e.target.value })}
          required
        />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Voto</Form.Label>
        <Form.Select value={newComment.rate} onChange={(e) => setNewComment({ ...newComment, rate: e.target.value })}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Select>
      </Form.Group>
      <Button type="submit" variant="primary" size="sm">
        Invia
      </Button>
    </Form>
  );
}

export default AddComment;
