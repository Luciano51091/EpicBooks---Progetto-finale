import React from "react";
import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

function CommentList({ comments, getComments }) {
  return (
    <div className="comment-list">
      <ListGroup data-testid="single-comment">
        <h6 className="small fw-bold">Recensioni:</h6>
        {comments.map((comment) => (
          <SingleComment key={comment._id} comment={comment} getComments={getComments} />
        ))}
      </ListGroup>
    </div>
  );
}

export default CommentList;
