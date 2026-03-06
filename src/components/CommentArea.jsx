import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

function CommentArea({ asin }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
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

    getComments();
  }, [asin]);

  return (
    <div className="mt-3">
      {isLoading && <Spinner animation="border" variant="primary" />}
      <CommentList comments={comments} />
      <AddComment asin={asin} />
    </div>
  );
}

export default CommentArea;
