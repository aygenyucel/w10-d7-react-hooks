import { useState } from "react";
import { Card, Col } from "react-bootstrap";
// import CommentArea from "./CommentArea";
import "./SingleBook.css";

const SingleBook = (props) => {
  // state = {
  //   isSelected: false,
  //   selectedBook: null,
  // };
  const [isSelected, setIsSelected] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <Col className="mb-3 d-flex flex-column" key={props.key}>
      <Card
        onClick={() => {
          // this.setState({
          //   isSelected: !this.state.isSelected,
          //   selectedBook: this.props.singleBookObject,
          // });
          setIsSelected(!isSelected);
          setSelectedBook(props.singleBookObject);
          props.changeSelectedBookAsin(props.singleBookObject.asin);
          console.log("CLICKED!", selectedBook);
        }}
        className={isSelected ? "card-selected" : "card-not-selected"}
      >
        <Card.Img variant="top" src={props.singleBookObject.img} />
        <Card.Body className="d-flex align-items-center justify-content-center">
          <Card.Title>{props.singleBookObject.title}</Card.Title>
        </Card.Body>
      </Card>
      {/* {this.state.isSelected && (
          <CommentArea selectedBook={this.state.selectedBook} />
        )} */}
    </Col>
  );
};

export default SingleBook;
