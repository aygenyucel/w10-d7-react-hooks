import { ListGroup } from "react-bootstrap";

const CommentList = (props) => {
  let { selectedBookComments } = props;
  return (
    <ListGroup style={{ backgroundColor: "green" }}>
      {selectedBookComments?.map((comment) => (
        <ListGroup.Item>
          <div className="d-flex justify-content-between">
            <strong>"{comment.comment}"</strong>
            <div>
              <span className="text-success">{comment.rate}</span>/5
            </div>
          </div>
          {/* <div>elementId: {comment.elementId}</div> */}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default CommentList;
