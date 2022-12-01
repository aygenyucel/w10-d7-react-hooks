import { Component } from "react";
import { Card, Col } from "react-bootstrap";
// import CommentArea from "./CommentArea";
import "./SingleBook.css";

class SingleBook extends Component {
  state = {
    isSelected: false,
    selectedBook: null,
  };

  render() {
    return (
      <Col className="mb-3 d-flex flex-column" key={this.props.key}>
        <Card
          onClick={() => {
            this.setState({
              isSelected: !this.state.isSelected,
              selectedBook: this.props.singleBookObject,
            });
            this.props.changeSelectedBookAsin(this.props.singleBookObject.asin);
            console.log("CLICKED!", this.state.selectedBook);
          }}
          className={
            this.state.isSelected ? "card-selected" : "card-not-selected"
          }
        >
          <Card.Img variant="top" src={this.props.singleBookObject.img} />
          <Card.Body className="d-flex align-items-center justify-content-center">
            <Card.Title>{this.props.singleBookObject.title}</Card.Title>
          </Card.Body>
        </Card>
        {/* {this.state.isSelected && (
          <CommentArea selectedBook={this.state.selectedBook} />
        )} */}
      </Col>
    );
  }
}

export default SingleBook;
