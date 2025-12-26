import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Tickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/tickets")
      .then(res => setTickets(res.data))
      .catch(err => console.error(err));
  }, []);

  const deleteTicket = (id) => {
    if (window.confirm("Are you sure you want to delete this ticket?")) {
      axios
        .delete(`http://localhost:8080/api/tickets/${id}`)
        .then(() => {
          setTickets(tickets.filter(t => t.id !== id));
        });
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      {/* PAGE TITLE */}
      <h2
        style={{
          marginBottom: "25px",
          fontFamily: "Playfair Display, serif",
          color: "#2565AE"
        }}
      >
        All Tickets
      </h2>

      {/* TABLE CARD */}
      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)"
          }}
        >
          {/* TABLE HEADER */}
          <thead style={{ backgroundColor: "#2565AE", color: "white" }}>
            <tr>
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Title</th>
              <th style={thStyle}>Description</th>
              <th style={thStyle}>Status</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>

          {/* TABLE BODY */}
          <tbody>
            {tickets.length === 0 ? (
              <tr>
                <td colSpan="5" style={{ padding: "20px", textAlign: "center" }}>
                  No tickets found
                </td>
              </tr>
            ) : (
              tickets.map((t, index) => (
                <tr
                  key={t.id}
                  style={{
                    backgroundColor:
                      index % 2 === 0 ? "#F4FAFF" : "#ffffff",
                    transition: "background-color 0.3s ease"
                  }}
                  onMouseEnter={e =>
                    (e.currentTarget.style.backgroundColor = "#E3F1FF")
                  }
                  onMouseLeave={e =>
                    (e.currentTarget.style.backgroundColor =
                      index % 2 === 0 ? "#F4FAFF" : "#ffffff")
                  }
                >
                  <td style={tdStyle}>{t.id}</td>
                  <td style={tdStyle}>{t.title}</td>
                  <td style={tdStyle}>{t.description}</td>

                  {/* STATUS BADGE */}
                  <td style={tdStyle}>
                    <span
                      style={{
                        padding: "6px 12px",
                        borderRadius: "6px",
                        fontSize: "13px",
                        fontWeight: "500",
                        minWidth: "110px",
                        display: "inline-block",
                        textAlign: "center",
                        backgroundColor:
                          t.status === "OPEN"
                            ? "#FFE08A"
                            : t.status === "IN_PROGRESS"
                            ? "#B3D4FF"
                            : "#9FE6B8",
                        color: "#1f2937"
                      }}
                    >
                      {t.status}
                    </span>
                  </td>

                  {/* ACTION BUTTONS */}
                  <td style={tdStyle}>
                    <Link
                      to={`/edit/${t.id}`}
                      style={{
                        marginRight: "14px",
                        color: "#2565AE",
                        textDecoration: "none",
                        fontWeight: "500"
                      }}
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => deleteTicket(t.id)}
                      style={deleteBtnStyle}
                      onMouseEnter={e => {
                        e.currentTarget.style.transform = "scale(1.05)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 10px rgba(0,0,0,0.25)";
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* TABLE HEADER STYLE */
const thStyle = {
  padding: "14px",
  textAlign: "left",
  fontFamily: "Inter, sans-serif",
  fontSize: "14px",
  fontWeight: "600"
};

/* TABLE DATA STYLE */
const tdStyle = {
  padding: "14px",
  fontFamily: "Inter, sans-serif",
  fontSize: "14px",
  color: "#374151"
};

/* DELETE BUTTON STYLE */
const deleteBtnStyle = {
  backgroundColor: "#DC2626",
  color: "white",
  border: "none",
  padding: "6px 14px",
  borderRadius: "6px",
  cursor: "pointer",
  transition: "transform 0.2s ease, box-shadow 0.2s ease"
};

export default Tickets;
