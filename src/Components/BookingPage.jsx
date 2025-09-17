import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BookingPage.css";

const ROWS = ["A","B","C","D","E","F","G","H"];
const COLS = 10;

function makeOccupiedSet() {
  const s = new Set();
  while (s.size < 8) {
    const r = ROWS[Math.floor(Math.random() * ROWS.length)];
    const c = 1 + Math.floor(Math.random() * COLS);
    s.add(`${r}${c}`);
  }
  return s;
}

const BookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const movie = location.state?.movie;

  const [occupied] = useState(() => makeOccupiedSet());
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [ticketCounts, setTicketCounts] = useState({ adult: 1, child: 0, senior: 0 });

  if (!movie) {
    return (
      <div className="booking-error">
        <p>Movie details not found.</p>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    );
  }

  const prices = { adult: 15, child: 10, senior: 12 };
  const totalTickets = ticketCounts.adult + ticketCounts.child + ticketCounts.senior;
  const totalPrice =
    ticketCounts.adult * prices.adult +
    ticketCounts.child * prices.child +
    ticketCounts.senior * prices.senior;

  const toggleSeat = (seatId) => {
    if (occupied.has(seatId)) return;
    setSelectedSeats((prev) =>
      prev.includes(seatId) ? prev.filter((s) => s !== seatId) : [...prev, seatId]
    );
  };

  const changeTicket = (type, delta) => {
    setTicketCounts((p) => {
      const next = Math.max(0, p[type] + delta);
      return { ...p, [type]: next };
    });
  };

  const handleConfirm = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat.");
      return;
    }
    if (selectedSeats.length !== totalTickets) {
      alert("The number of selected seats does not equal the number of tickets.");
      return;
    }
    alert("✅ Your reservation has been confirmed. We hope you enjoy watching!");
  };

  return (
    <div className="booking-page">
      <h1 className="booking-title">Complete Your Booking</h1>

      <div className="booking-layout">
        {/* LEFT */}
        <div className="booking-left">
          <div className="booking-screen">Screen</div>

          <div className="booking-seat-map">
            {ROWS.map((row) => (
              <div key={row} className="booking-seat-row">
                <div className="booking-row-label">{row}</div>
                {Array.from({ length: COLS }, (_, i) => {
                  const id = `${row}${i + 1}`;
                  const isOcc = occupied.has(id);
                  const isSel = selectedSeats.includes(id);
                  return (
                    <button
                      key={id}
                      className={`booking-seat ${isOcc ? "occ" : isSel ? "sel" : "avail"}`}
                      onClick={() => toggleSeat(id)}
                      disabled={isOcc}
                    >
                      {i + 1}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>

          <div className="booking-legend">
            <span><span className="booking-seat mini sel"></span> Selected</span>
            <span><span className="booking-seat mini avail"></span> Available</span>
            <span><span className="booking-seat mini occ"></span> Occupied</span>
          </div>

          <div className="booking-tickets">
            <h3>Choose Tickets</h3>
            {["adult","child","senior"].map((t) => (
              <div className="booking-ticket-row" key={t}>
                <span className="booking-label">
                  {t[0].toUpperCase() + t.slice(1)} (${prices[t]})
                </span>
                <div className="booking-controls">
                  <button onClick={() => changeTicket(t, -1)}>-</button>
                  <span>{ticketCounts[t]}</span>
                  <button onClick={() => changeTicket(t, +1)}>+</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="booking-right">
          <div className="booking-card">
            <img
              src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : "/placeholder.jpg"}
              alt={movie.title}
            />
            <h2>{movie.title}</h2>
            <p><strong>Cinema:</strong> CineFlex Grand Hall</p>
            <p><strong>Seats:</strong> {selectedSeats.join(", ") || "None"}</p>
          </div>

          <div className="booking-summary">
            <h3>Order Summary</h3>
            <p>Adult: {ticketCounts.adult}</p>
            <p>Child: {ticketCounts.child}</p>
            <p>Senior: {ticketCounts.senior}</p>
            <p className="booking-total">Total: ${totalPrice.toFixed(2)}</p>
            <button className="booking-confirm" onClick={handleConfirm}>Confirm Booking</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
