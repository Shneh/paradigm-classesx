import { useState } from "react";
import axios from "axios";

export default function AddStudent() {
  const [form, setForm] = useState({
    className: "",
    name: "",
    parentName: "",
    phone: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `${import.meta.env.VITE_API_URL}/students`,
        {
          className: form.className,
          name: form.name,
          parentName: form.parentName,
          phone: form.phone
        },
        {
          headers: {
            Authorization: token
          }
        }
      );

      alert("Student added successfully!");
      setForm({ className: "", name: "", parentName: "", phone: "" });
    } catch (err) {
      console.log(err.response?.data || err);
      alert("Error adding student. Make sure you're logged in.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(105deg, #e0eafc 60%, #cfdef3 100%)",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "48px 38px",
          borderRadius: "18px",
          boxShadow: "0 6px 32px rgba(35,104,211,0.14)",
          minWidth: 330,
          maxWidth: 400,
          width: "100%",
        }}
      >
        <h2
          style={{
            color: "#2368d3",
            fontWeight: 700,
            fontSize: "2.1rem",
            textAlign: "center",
            marginBottom: 28,
            letterSpacing: 1,
          }}
        >
          Add New Student
        </h2>
        <input
          name="className"
          placeholder="Class (IX/X/XI/XII)"
          value={form.className}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "20px",
            fontSize: "1.1rem",
            borderRadius: "8px",
            border: "1px solid #c7d9e7",
            background: "#f4f8ff",
          }}
        />
        <input
          name="name"
          placeholder="Student Name"
          value={form.name}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "20px",
            fontSize: "1.1rem",
            borderRadius: "8px",
            border: "1px solid #c7d9e7",
            background: "#f4f8ff",
          }}
        />
        <input
          name="parentName"
          placeholder="Parent Name"
          value={form.parentName}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "20px",
            fontSize: "1.1rem",
            borderRadius: "8px",
            border: "1px solid #c7d9e7",
            background: "#f4f8ff",
          }}
        />
        <input
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "26px",
            fontSize: "1.1rem",
            borderRadius: "8px",
            border: "1px solid #c7d9e7",
            background: "#f4f8ff",
          }}
        />
        <button
          onClick={handleSubmit}
          style={{
            width: "100%",
            padding: "16px 0",
            background: "linear-gradient(90deg,#2368d3 60%,#52a6fa 120%)",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            fontSize: "1.15rem",
            fontWeight: 650,
            cursor: "pointer",
            boxShadow: "0 2px 11px rgba(35,104,211,0.09)",
            marginBottom: 10,
            transition: "background 0.2s"
          }}
        >
          Add Student
        </button>
        <div style={{
          textAlign: "center",
          marginTop: "20px",
          color: "#2368d3",
          fontSize: "0.99rem"
        }}>
          All fields required.<br/>
          For errors or queries, contact admin.
        </div>
      </div>
    </div>
  );
}
