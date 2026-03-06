import React from "react";
import { ListGroupItem } from "react-bootstrap";

function SingleComment() {
  return (
    <ListGroupItem>
      <strong>{comment.author}</strong>: {comment.comment}
      <span className="ms-2 badge bg-info">{comment.rate} ★</span>
    </ListGroupItem>
  );
}

export default SingleComment;
