import { useState } from "react";
import { Container, Form, Row } from "react-bootstrap";
import fantasyBooks from "../booksData/fantasy.json";
import SingleBook from "./SingleBook";

const BookList = (props) => {
  // state = {
  //   search: "",
  //   filteredBooks: [],
  // };

  const [search, setSearch] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

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
              onChange={
                (e) => {
                  setSearch(e.target.value);
                  setFilteredBooks(filterBook(fantasyBooks, e.target.value));
                }
                // this.setState({
                //   search: e.target.value,
                //   filteredBooks: filterBook(fantasyBooks, e.target.value),
                // })
              }
            />
          </Form>
        </div>
      </div>
      <br />
      <Row>
        {search === ""
          ? fantasyBooks.map((book) => (
              <SingleBook
                singleBookObject={book}
                key={book.asin}
                changeSelectedBookAsin={props.changeSelectedBookAsin}
              />
            ))
          : filteredBooks.map((book) => (
              <SingleBook
                singleBookObject={book}
                key={book.asin}
                changeSelectedBookAsin={props.changeSelectedBookAsin}
              />
            ))}
      </Row>
    </Container>
  );
};

export default BookList;
