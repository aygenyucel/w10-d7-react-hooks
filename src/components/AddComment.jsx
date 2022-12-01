import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddComment = (props) => {
  // state = {
  //   isClicked: false,
  //   newComment: {
  //     author: "example@example.com",
  //     comment: "",
  //     rate: "",
  //     elementId: this.props.selectedBookId,
  //   },
  // };
  const [newComment, setNewComment] = useState({
    author: "example@example.com",
    comment: "",
    rate: "",
    elementId: props.selectedBookId,
  });

  const [isClicked, setIsClicked] = useState(false);

  const onClick = () => {
    // this.setState({ isClicked: !this.state.isClicked });
    setIsClicked(!isClicked);
  };

  const onChangeHandler = (value, fieldToSet) => {
    // this.setState({
    //   newComment: {
    //     ...this.state.newComment, // this creates a copy of reservation!
    //     [fieldToSet]: value,
    //   },
    // });

    setNewComment({ ...newComment, [fieldToSet]: value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      // await waits for the promise to complete before moving on
      // (it pauses the execution of your function)

      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(newComment),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZmI2NWQ0YmUzZDAwMTU4NDYwMmIiLCJpYXQiOjE2NjkyOTA3NjIsImV4cCI6MTY3MDUwMDM2Mn0.9Ka1gVwmbV3Nd01ZwPXXs9H_h5FbE58DgtwP3TQ-YTk",
          },
        }
      );
      console.log("response", response);

      if (response.ok) {
        alert("Added your comment!");
        // this.setState({
        //   ...this.state,
        //   newComment: {
        //     ...this.state.newComment,
        //     comment: "",
        //     rate: "",
        //   },
        // });
        setNewComment({ ...newComment, comment: "", rate: "" });
      } else {
        console.log("something went wrong :(");
        // you'll fall here if the server had a problem handling your request
      }
    } catch (error) {
      console.log(error);
      // you'll fall here instead if you have let's say an internet problem
      // or you were never able to contact the server in the first place
    }
  };

  return (
    <div>
      {!isClicked && (
        <Button className="add-comment-btn" onClick={onClick}>
          Add New Comment
        </Button>
      )}
      {isClicked && (
        <Form onSubmit={onSubmitHandler}>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label className="d-flex justify-content-start">
              Your comment:
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={newComment.comment}
              onChange={(e) => onChangeHandler(e.target.value, "comment")}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label className="d-flex justify-content-start">
              Your Rate:
            </Form.Label>
            <Form.Control
              as="select"
              value={newComment.rate}
              onChange={(e) => onChangeHandler(e.target.value, "rate")}
              required
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </div>
  );
};

export default AddComment;
