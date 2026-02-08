import { useLocation } from "react-router-dom";

function BookingSuccess() {

  const location = useLocation();
  const data = location.state;

  const bookingId = Math.floor(Math.random()*100000);

  return (

    <div className="main">

      <div className="container successBox">

        <h2>Seat Booked Successfully 🎉</h2>

        <p>Booking ID: {bookingId}</p>

        <p>Name: {data?.name}</p>
        <p>Email: {data?.email}</p>
        <p>Mobile: {data?.mobile}</p>

        {/* NEW */}
        <p>Tickets Booked: {data?.tickets}</p>

      </div>

    </div>
  );
}

export default BookingSuccess;
