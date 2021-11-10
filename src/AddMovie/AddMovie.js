import React, { useState } from "react";
import Modal from "react-modal";

import "./AddMovie.css";

Modal.setAppElement("#root");

const AddMovie = ({ addMovie }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const [image, setImage] = useState("");
  const [type, setType] = useState("");

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    let newMovie = {
      name,
      date,

      image,
      type,
    };
    addMovie(e, newMovie);
    setIsOpen(false);
    setName("");
    setDate("");

    setImage("");
    setType("");
  };

  return (
    <div>
      <div className="Add-btn-container">
        <button className="Add-btn" onClick={openModal}>
          +
        </button>
        <Modal
          className="add-modal"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
        >
          <h1 className="addMovie-h1">Add A Movie</h1>
          <form>
            <label>Movie Name</label>
            <input
              type="text"
              name="name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />

            <label>Movie Release Date</label>
            <input
              type="number"
              name="date"
              value={date}
              required
              onChange={(e) => setDate(e.target.value)}
            />
            <label>Movie Image</label>
            <input
              className="image1"
              type="url"
              name="image"
              value={image}
              required
              onChange={(e) => setImage(e.target.value)}
            />
            <label>Movie Type</label>
            <input
              type="text"
              name="type"
              value={type}
              required
              onChange={(e) => setType(e.target.value)}
            />
          </form>
          <button className="Modal-btn" onClick={handleSubmit}>
            Submit
          </button>
          <button className="Modal-btn" onClick={closeModal}>
            close
          </button>
        </Modal>
      </div>
    </div>
  );
};

export default AddMovie;
