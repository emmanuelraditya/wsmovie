import React from "react";
import { Modal, Box } from "@mui/material";
import data from "../dummy.json";
import "./Modal.css";

function ModalDetail({ isOpen, book, handleClose,handleFavorite }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 627,
    height: "auto",
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={isOpen}
      // onClose={handleCloseBook}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {/* <form onSubmit={handleSubmit}> */}
      <Box sx={style}>
        <p>Title: {data.data.title} </p>
        <p>Genre:  {data.data.genre} </p>
        <p>Rating: {book && book.book_details[0].contributor} </p>
        <p>Duration: {book && book.book_details[0].description}</p>
        <p>Quality:  {book && book.book_details[0].price} </p>
        <p>Trailer:  {book && book.book_details[0].primary_isbn13} </p>
        <p>Watch Now:  {book && book.book_details[0].publisher} </p>
        {/* <p>Buy Link:  <a>{book && book.amazon_product_url} </a> </p> */}
        <div className="button">
        <button onClick={handleClose}>close</button>
        </div>
      </Box>
      {/* </form> */}
    </Modal>
  );
}

export default ModalDetail;
