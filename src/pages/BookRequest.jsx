import { useState } from "react";

function BookRequest() {
  const [form, setForm] = useState({
    name: "",
    studentId: "",
    title: "",
    author: "",
    reason: ""
  });

  const [requests, setRequests] = useState([]);

 
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    setRequests([...requests, form]); // add to list


    setForm({
      name: "",
      studentId: "",
      title: "",
      author: "",
      reason: ""
    });
  };

  return (
    <div className="container mt-5">
      <h2>Book Request Form (Controlled)</h2>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          placeholder="Student Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          placeholder="Student ID"
          name="studentId"
          value={form.studentId}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          placeholder="Book Title"
          name="title"
          value={form.title}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          placeholder="Author"
          name="author"
          value={form.author}
          onChange={handleChange}
        />

        <textarea
          className="form-control mb-2"
          placeholder="Reason"
          name="reason"
          value={form.reason}
          onChange={handleChange}
        />

        <button className="btn btn-primary">Submit Request</button>
      </form>

      {/* DISPLAY SUBMITTED REQUESTS */}
      <h3 className="mt-4">Submitted Requests:</h3>

      <ul>
        {requests.map((req, index) => (
          <li key={index}>
            {req.name} ({req.studentId}) requested "{req.title}" by {req.author}. Reason: {req.reason}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookRequest;