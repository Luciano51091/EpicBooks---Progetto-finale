import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

function CommentArea({ asin }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getComments = async () => {
    if (!asin) return;
    setIsLoading(true);
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTliNjdjMGFmZWY0YzAwMTUwODI3OGQiLCJpYXQiOjE3NzI4MTExMDksImV4cCI6MTc3NDAyMDcwOX0.bZn6v4SBAlH-LEJfaxestsTvvXtQESHosUZcltXm2LU",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setComments(data);
      }
    } catch (error) {
      console.error("Errore fetch:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // 2. Lo useEffect si occupa solo di far partire la fetch quando l'asin cambia
  useEffect(() => {
    getComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asin]);

  if (!asin) {
    return (
      <div className="mt-3 p-3 bg-light rounded text-center">
        <p className="mb-0 text-muted">Seleziona un libro per vedere i commenti.</p>
      </div>
    );
  }

  return (
    <div className="mt-3 p-2 bg-light rounded" style={{ maxHeight: "500px", overflow: "auto" }}>
      {/* <h6 className="small border fw-bold">Recensioni:</h6> */}
      {isLoading && <Spinner animation="border" variant="primary" size="sm" />}
      <CommentList comments={comments} getComments={getComments} />
      <hr />
      <AddComment asin={asin} getComments={getComments} />
    </div>
  );
}

export default CommentArea;
