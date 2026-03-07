import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

function CommentArea({ asin }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getComments = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTliNjdjMGFmZWY0YzAwMTUwODI3OGQiLCJpYXQiOjE3NzI4MTExMDksImV4cCI6MTc3NDAyMDcwOX0.bZn6v4SBAlH-LEJfaxestsTvvXtQESHosUZcltXm2LU",
        },
      });

      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getComments();
  }, [asin]);

  return (
    <div className="mt-3 p-2 bg-light rounded" style={{ maxHeight: "300px", overflowY: "auto" }}>
      <h6 className="small fw-bold">Recensioni:</h6>
      {isLoading && <Spinner animation="border" variant="primary" size="sm" />}
      <CommentList comments={comments} getComments={getComments} />
      <AddComment asin={asin} getComments={getComments} />
    </div>
  );
}

export default CommentArea;
