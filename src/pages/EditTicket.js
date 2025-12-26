import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./TicketForm.css";

const EditTicket = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [ticket, setTicket] = useState({
    title: "",
    description: "",
    status: "OPEN",
  });

  useEffect(() => {
    axios.get(`http://localhost:8080/api/tickets/${id}`)
      .then((res) => setTicket(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    setTicket({ ...ticket, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/api/tickets/${id}`, ticket)
      .then(() => navigate("/tickets"))
      .catch((err) => console.error(err));
  };

  return (
    <div className="ticket-page">
      <div className="ticket-card">
        <h2>Edit Ticket</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={ticket.title}
            onChange={handleChange}
            placeholder="Title"
            required
          />

          <textarea
            name="description"
            value={ticket.description}
            onChange={handleChange}
            placeholder="Description"
            required
          />

          <select
            name="status"
            value={ticket.status}
            onChange={handleChange}
          >
            <option value="OPEN">OPEN</option>
            <option value="IN_PROGRESS">IN PROGRESS</option>
            <option value="CLOSED">CLOSED</option>
          </select>

          <button type="submit">Update Ticket</button>
        </form>
      </div>
    </div>
  );
};

export default EditTicket;
