import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

function BookingForm() {

  const navigate = useNavigate();
  const location = useLocation();   // ✅ get data from previous page

  const [form,setForm] = useState({
    name:"",
    email:"",
    mobile:""
  });

  const handleSubmit = () => {

    navigate("/success", {
      state: {
        ...form,                       // ✅ use form (not formData)
        tickets: location.state.tickets   // ✅ receive tickets
      }
    });

  };

  return (

    <div className="main">

      <div className="container">

        <h2>Book Seat</h2>

        <div className="form">

          <input
            placeholder="Name"
            value={form.name}
            onChange={(e)=>setForm({...form,name:e.target.value})}
          />

          <input
            placeholder="Email"
            value={form.email}
            onChange={(e)=>setForm({...form,email:e.target.value})}
          />

          <input
            placeholder="Mobile"
            value={form.mobile}
            onChange={(e)=>setForm({...form,mobile:e.target.value})}
          />

          <br/>

          <button className="btn" onClick={handleSubmit}>
            Submit
          </button>

        </div>

      </div>

    </div>
  );
}

export default BookingForm;
