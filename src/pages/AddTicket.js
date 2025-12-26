import { useState } from "react";
import axios from "axios";
import "./AddTicket.css";

function AddTicket() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("OPEN");

  const submitTicket = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8080/api/tickets", {
      title,
      description,
      status
    }).then(() => {
      alert("Ticket added successfully");
      setTitle("");
      setDescription("");
      setStatus("OPEN");
    });
  };

  return (
    <div className="add-container">
      <h2>Add New Ticket</h2>

      <form onSubmit={submitTicket}>
        <input
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />

        <select value={status} onChange={e => setStatus(e.target.value)}>
          <option>OPEN</option>
          <option>IN_PROGRESS</option>
          <option>RESOLVED</option>
        </select>

        <button>Add Ticket</button>
      </form>
    </div>
  );
}

export default AddTicket;
