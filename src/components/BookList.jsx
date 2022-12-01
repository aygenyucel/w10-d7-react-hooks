import { Component } from "react";
import { Container, Form, Row } from "react-bootstrap";
import fantasyBooks from "../booksData/fantasy.json";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    search: "",
    filteredBooks: [],
  };

  render() {
    const filterBook = (listOfBooks, search) => {
      return listOfBooks.filter((book) =>
        book.title.toLowerCase().includes(search)
      );
    };

    return (
      <Container>
        <div>
          <hr />

          <div>Fantasy Books:</div>
          <br />
          <div>
            <Form className="d-flex">
              <Form.Control
                type="text"
                placeholder="Search in Fantasy books..."
                onChange={(e) =>
                  this.setState({
                    search: e.target.value,
                    filteredBooks: filterBook(fantasyBooks, e.target.value),
                  })
                }
              />
            </Form>
          </div>
        </div>
        <br />
        <Row>
          {this.state.search === ""
            ? fantasyBooks.map((book) => (
                <SingleBook
                  singleBookObject={book}
                  key={book.asin}
                  changeSelectedBookAsin={this.props.changeSelectedBookAsin}
                />
              ))
            : this.state.filteredBooks.map((book) => (
                <SingleBook
                  singleBookObject={book}
                  key={book.asin}
                  changeSelectedBookAsin={this.props.changeSelectedBookAsin}
                />
              ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
