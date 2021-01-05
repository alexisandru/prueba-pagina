import React from "react";

import styles from "./styles/ShowNote.module.css";

function ShowNotes(props) {
  const deleteNote = (index) => {
    props.refreshNote(index);
  };

  let noNotes = <p style={{ color: "#999999" }}>No notes yet</p>;

  const notes = props.allNotes.map((note, i) => {
    return (
      <div className={styles.mt3} key={i}>
        <div className={styles.noteBody}>
          <h4 className={styles.note}> {note.title} </h4>
          <p className={styles.note}> {note.description}</p>
          <div className={styles.footer}>
            <p className={styles.noteDate}>{note.date}</p>
            <button onClick={() => deleteNote(i)} className={styles.btnDelete}>
              <img
                alt="."
                style={{ width: "20px" }}
                src="https://img.icons8.com/wired/64/000000/trash.png"
              />
            </button>
          </div>
        </div>
      </div>
    );
  });

  let hasNotes = props.allNotes.length !== 0 ? notes : noNotes;

  return (
    <div className={styles.container}>
      <p style={{ fontSize: "0.8em", marginBottom: "20px" }}>
        Cantidad de notas: {props.allNotes.length}
      </p>
      {hasNotes}
    </div>
  );
}

export default ShowNotes;
