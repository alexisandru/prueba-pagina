import React, { useState } from "react";

import styles from "./styles/CreateNote.module.css";

function CreateNote(props) {
  const [note, setNote] = useState({
    title: "",
    description: "",
    date: "",
  });

  const handleInputChange = (e) => {
    const { value, name } = e.target;

    setNote({
      ...note,
      [name]: value,
      date: ponerFecha(),
    });
  };

  const ponerFecha = () => {
    let date = new Date();

    let days = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miercoles",
      "Jueves",
      "Viernes",
      "Sabado",
    ];

    let day = date.getDay();
    let numberDay = date.getDate();

    let hour = date.getHours();
    let minutes = date.getMinutes();

    let dayName = days[day];

    let dateNote = `${dayName} ${numberDay}, ${hour}:${minutes}`;

    return dateNote;
  };

  const pasarNota = (e) => {
    e.preventDefault();
    if (note.title !== "" || note.description !== "") {
      props.addNote(note);
    }
    console.log(note);
    setNote({ title: "", description: "", date: "" });
  };

  return (
    <div className={styles.container}>
      <form className={styles.formBody}>
        <label style={{ fontStyle: "italic", fontSize: "1.1em" }}>
          Create note
        </label>

        <input
          className={styles.textTitle}
          type="text"
          value={note.title}
          placeholder="Title here..."
          name="title"
          autoComplete="off"
          onChange={handleInputChange}
        />

        <textarea
          placeholder="Description here..."
          className={styles.textDescription}
          value={note.description}
          name="description"
          onChange={handleInputChange}
        ></textarea>

        <button
          disabled={note.title === "" && note.description === ""}
          onClick={pasarNota}
          type="submit"
          className={styles.btn}
        >
          Post It
        </button>
      </form>
    </div>
  );
}

export default CreateNote;
