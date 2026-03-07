import React from "react";
import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

function CommentList({ comments, getComments }) {
  return (
    <ListGroup>
      {comments.map((comment) => (
        <SingleComment key={comment._id} comment={comment} getComments={getComments} />
      ))}
    </ListGroup>
  );
}

export default CommentList;
