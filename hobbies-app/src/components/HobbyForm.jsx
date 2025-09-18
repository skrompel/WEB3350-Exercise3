import { useState } from "react";
import "../styles/HobbyForm.css";

function HobbyForm({ onAddHobby, onCancel }) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredDesc, setEnteredDesc] = useState("");
  const [error, setError] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    if (enteredName.trim() === "" || enteredDesc.trim() === "") {
      setError(true);
      return;
    }

    const hobbyData = {
      id: Math.random().toString(),
      name: enteredName,
      description: enteredDesc,
    };

    onAddHobby(hobbyData);
    setEnteredName("");
    setEnteredDesc("");
    setError(false);
  };

  return (
    <form onSubmit={submitHandler} className="hobby-form">
      <div
        className={`form-control ${
          error && enteredName.trim() === "" ? "invalid" : ""
        }`}
      >
        <label>Hobby Name</label>
        <input
          type="text"
          value={enteredName}
          onChange={(e) => setEnteredName(e.target.value)}
        />
      </div>
      <div
        className={`form-control ${
          error && enteredDesc.trim() === "" ? "invalid" : ""
        }`}
      >
        <label>Description</label>
        <input
          type="text"
          value={enteredDesc}
          onChange={(e) => setEnteredDesc(e.target.value)}
        />
      </div>
      {error && <p className="error-text">Please fill out all fields!</p>}
      <div className="form-actions">
        <button type="submit">Add Hobby</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default HobbyForm;
