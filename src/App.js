import { Col, Container, Row } from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import BookList from "./components/BookList";
// import CommentArea from "./components/CommentArea";
import { Component } from "react";
import CommentArea from "./components/CommentArea";

class App extends Component {
  state = {
    selectedBookAsin: "",
  };

  changeSelectedBookAsin = (newBookAsin) => {
    this.setState({ selectedBookAsin: newBookAsin });
    console.log(
      "changed book asin inside app.js:",
      this.state.selectedBookAsin
    );
  };

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col xs={6}>
              <BookList changeSelectedBookAsin={this.changeSelectedBookAsin} />
            </Col>
            <Col xs={6}>
              <CommentArea selectedBookAsin={this.state.selectedBookAsin} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
