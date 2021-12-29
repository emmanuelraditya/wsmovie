import React, { useEffect, useState } from "react";
import { Grid, withStyles } from "@material-ui/core";
import MovieCard from "../components/MovieCard";
import ModalDetail from "./Modal";

const styles = {
  container: {
    display: "flex",
  },
  paper: {
    height: 200,
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
  },
};

// QUESTION:
// Order of appearance in screen size 'lg' is 1 | 2 | 3 (from left to Right)
// When the screen size is 'xs' then the grid appers in the order 1->2->3 (from top to bottom) but
// I need in the order say 1->3->2(from top to bottom) or say 2->1->3.

function GridComponent(props) {
  const { classes } = props;
  // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [books, setBook] = useState([]);
  const [bookDetail, setBookDetail] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [favorite,setFavorite]=useState([]);


  const handleShow = (idx) => {
    setOpen(true);
    const detailBook = books[idx];
    setBookDetail(detailBook);
  };

  const handleClose = () => {
    setOpen(false);
    setBookDetail("");
  };

  const handleFavorite = (index) => {
   const book=books[index];
   setFavorite([...favorite,book])
  };


  async function getBooks() {
    try {
      setLoading(true);
      const res = await window.fetch(
        `https://api.nytimes.com/svc/books/v3/lists.json?list=hardcover-fiction&api-key=sscrzT1mpUjRPHGFFo2dqkDpRkkdYjhe`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      const data = await res.json();
      setLoading(false);
      setBook(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className={classes.container}>
      <Grid container spacing={1000} justify="flex-start">
        {books &&
          books.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
              onClick={() => handleShow(index)}
            >
              <MovieCard book={item} handleFavorite={handleFavorite} />
            </Grid>
          ))}
      </Grid>
      <ModalDetail isOpen={open} book={bookDetail} handleClose={handleClose} />
    </div>
  );
}
export default withStyles(styles)(GridComponent);

