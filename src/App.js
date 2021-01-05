import React, { useState } from "react";

import CreateNote from "./components/CreateNote";
import ShowNotes from "./components/ShowNotes";

function App() {
  const [note, setNote] = useState([]);

  const agregarNota = (nota) => {
    setNote([nota, ...note]);
  };

  const borrarNota = (index) => {
    let lista = note.filter((e, i) => i !== index);
    setNote(lista);
  };

  return (
    <div>
      <CreateNote addNote={agregarNota} />
      <ShowNotes allNotes={note} refreshNote={borrarNota} />
    </div>
  );
}

export default App;
