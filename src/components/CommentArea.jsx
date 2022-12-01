//CommentArea should fetch and store the comments for the selected book, and contains two sub-components: CommentsList and AddComment.

import CommentList from "./CommentList";
import AddComment from "./AddComment";
import "./CommentArea.css";
import { useEffect, useState } from "react";

const CommentArea = (props) => {
  // state = {
  //   selectedBookComments: [],
  // };

  const [selectedBookComments, setSelectedBookComments] = useState([]);

  const fetchSelectedComments = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          props.selectedBookAsin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZmI2NWQ0YmUzZDAwMTU4NDYwMmIiLCJpYXQiOjE2NjkyOTA3NjIsImV4cCI6MTY3MDUwMDM2Mn0.9Ka1gVwmbV3Nd01ZwPXXs9H_h5FbE58DgtwP3TQ-YTk",
          },
        }
      );

      if (response.ok) {
        let data = await response.json();
        // this.setState({
        //   selectedBookComments: data,
        // });
        setSelectedBookComments(data);
        // console.log("selectedBookComments:", this.state.selectedBookComments);
        // console.log(this.state.selectedBookId);
      } else {
        console.log("error when fetching the comments :(");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("CommentArea HAS BEEN UPDATED");
  //   console.log("prevProps:", prevProps);
  //   console.log("currentProps:", this.props);
  //   if (prevProps.selectedBookAsin !== this.props.selectedBookAsin) {
  //     this.fetchSelectedComments();
  //   }
  // }

  useEffect(() => {
    console.log("xxxcurrentProps:", props);
    fetchSelectedComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.selectedBookAsin]);

  // componentDidMount() {
  //   if (this.props.selectedBookAsin !== "") {
  //     this.fetchSelectedComments();
  //   }
  // }

  useEffect(() => {
    if (props.selectedBookAsin !== "") {
      fetchSelectedComments();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="position-fixed">
      <div className="comment-area">
        <CommentList selectedBookComments={selectedBookComments} />
        <br />
      </div>
      <AddComment selectedBookId={props.selectedBookAsin} />
    </div>
  );
};

export default CommentArea;
