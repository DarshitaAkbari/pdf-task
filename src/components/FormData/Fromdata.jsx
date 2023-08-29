import React, { useState } from "react";
import { jsPDF } from "jspdf";

const Fromdata = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  }); 

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const doc = new jsPDF();
    doc.text(`Name: ${data.name}`, 10, 10);
    doc.text(`Email: ${data.email}`, 10, 20);
    doc.text(`Message: ${data.message}`, 10, 30);
    doc.save("formData.pdf");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => {
              onHandleChange(e);
            }}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => {
              onHandleChange(e);
            }}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            onChange={(e) => {
              onHandleChange(e);
            }}
          />
        </div>
        <button type="submit">Export to PDF</button>
      </form>
    </div>
  );
};

export default Fromdata;
