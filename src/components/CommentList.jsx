import React from "react";
import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

function CommentList({ comments }) {
  return (
    <ListGroup>
      {comments.map((comment) => (
        <SingleComment key={comment._id} comment={comment} />
      ))}
    </ListGroup>
  );
}

export default CommentList;
