import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [showButton, setShowButton] = useState(false);

  const [showTitle, setShowTitle] = useState(false);
  function ContentClick() {
    setShowTitle(true);
    setShowButton(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    setShowTitle(false);
    setShowButton(false);
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {showTitle ? (
          <input
            name="title"
            value={note.title}
            onChange={handleChange}
            placeholder="Title"
          />
        ) : null}

        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          onClick={ContentClick}
          placeholder="Take a note..."
          rows={showTitle ? "3" : "1"}
        />
        {showButton ? (
          <Zoom in={true}>
            <Fab onClick={submitNote}>
              <AddIcon />
            </Fab>
          </Zoom>
        ) : null}
      </form>
    </div>
  );
}

export default CreateArea;
