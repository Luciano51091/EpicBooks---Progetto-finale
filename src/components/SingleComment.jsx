import React, { useState } from "react";
import { Button, ListGroupItem } from "react-bootstrap";

function SingleComment({ comment, getComments }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(comment.comment);

  const deleteComment = async (id) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${comment._id}`, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTliNjdjMGFmZWY0YzAwMTUwODI3OGQiLCJpYXQiOjE3NzI4MTExMDksImV4cCI6MTc3NDAyMDcwOX0.bZn6v4SBAlH-LEJfaxestsTvvXtQESHosUZcltXm2LU",
        },
      });

      if (response.ok) {
        alert("Commento eliminato");
        getComments();
      } else {
        alert("Errore nell'eliminazione");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateComment = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${comment._id}`, {
        method: "PUT",
        body: JSON.stringify({
          comment: editText,
          rate: comment.rate,
          elementId: comment.elementId,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTliNjdjMGFmZWY0YzAwMTUwODI3OGQiLCJpYXQiOjE3NzI4MTExMDksImV4cCI6MTc3NDAyMDcwOX0.bZn6v4SBAlH-LEJfaxestsTvvXtQESHosUZcltXm2LU",
        },
      });

      if (response.ok) {
        setIsEditing(false);
        getComments();
      }
    } catch (error) {
      console.error("Errore durante l'aggiornamento", error);
    }
  };

  return (
    <ListGroupItem className="border-0 border-bottom" data-testid="single-comment">
      <div className="d-flex flex-column">
        <div className="mb-2">
          <small className="fw-bold">{comment.author}:</small>
          <p className="mb-1 small text-muted">{comment.comment}</p>
          <span className="badge bg-info text-dark">{comment.rate} ★</span>
        </div>

        <div className="d-flex gap-2 justify-content-end">
          <Button variant="outline-warning" size="sm" className="py-0 px-2" onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? "Annulla" : "Modifica"}
          </Button>
          <Button variant="outline-danger" size="sm" className="py-0 px-2" onClick={() => deleteComment()}>
            Elimina
          </Button>
        </div>
      </div>
    </ListGroupItem>
  );
}

export default SingleComment;
