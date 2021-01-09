import React, { useState, useRef } from "react";

import styles from "./styles/CreateNote.module.css";

function CreateNote(props) {
  const inputEl = useRef(null);
  const textareaRef = useRef();

  const [note, setNote] = useState({
    title: "",
    description: "",
    date: "",
  });

  const changeHeight = () => {
    textareaRef.current.style.height = "32px";
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  const hacerClick = () => {
    inputEl.current.focus();
    textareaRef.current.style.height = "32px";
  };

  // Manejar datos ingresados en los inputs
  const handleInputChange = (e) => {
    const { value, name } = e.target;

    if (name === "description") {
      changeHeight(e);
    }

    setNote({
      ...note,
      [name]: value,
      date: addDate(),
    });
  };

  // Agregar la fecha y hora actual a la nota
  const addDate = () => {
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

  // Pasar la nota a App.js para mostrarla
  const pasarNota = () => {
    if (note.title !== "" || note.description !== "") {
      props.addNote(note);
    }
    console.log(note);
    setNote({ title: "", description: "", date: "" });
  };

  // Pasa la nota a la funcion de encima y hace focus en title
  const apretarBoton = (e) => {
    e.preventDefault();
    pasarNota();
    hacerClick();
  };

  return (
    <div className={styles.container}>
      <form className={styles.formBody}>
        <label style={{ fontStyle: "italic", fontSize: "1.2em" }}>
          Create note now
        </label>

        <input
          className={styles.textTitle}
          type="text"
          ref={inputEl}
          value={note.title}
          placeholder="Title here..."
          name="title"
          autoComplete="off"
          onChange={handleInputChange}
        />

        <textarea
          ref={textareaRef}
          id="autoresizing"
          placeholder="Description here..."
          className={styles.textDescription}
          value={note.description}
          name="description"
          onChange={handleInputChange}
        ></textarea>

        <button
          disabled={note.title === "" && note.description === ""}
          onClick={apretarBoton}
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
