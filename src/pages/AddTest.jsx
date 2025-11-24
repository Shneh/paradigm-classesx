import { useState } from "react";
import axios from "axios";

export default function AddTest() {
  const [form, setForm] = useState({
    testName: "",
    totalMarks: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/tests`, {
        testName: form.testName,
        totalMarks: Number(form.totalMarks)
      });
      alert("Test added successfully!");
      setForm({ testName: "", totalMarks: "" });
    } catch (err) {
      console.error(err);
      alert("Error adding test");
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
        background: "linear-gradient(99deg,#e0eafc 55%,#cfdef3 110%)",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "46px 38px",
          borderRadius: "17px",
          boxShadow: "0 6px 32px rgba(35,104,211,0.13)",
          minWidth: 330,
          maxWidth: 400,
          width: "100%",
          textAlign: "center"
        }}
      >
        <h2
          style={{
            color: "#2368d3",
            fontWeight: 700,
            fontSize: "2.1rem",
            marginBottom: 28,
            letterSpacing: 1,
          }}
        >
          Add New Test
        </h2>
        <input
          name="testName"
          placeholder="Test Name (Ex: Unit Test 1)"
          value={form.testName}
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
          name="totalMarks"
          placeholder="Total Marks"
          value={form.totalMarks}
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
            padding: "15px 0",
            background: "linear-gradient(90deg,#2368d3 65%,#52a6fa 110%)",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            fontSize: "1.16rem",
            fontWeight: 650,
            cursor: "pointer",
            boxShadow: "0 2px 11px rgba(35,104,211,0.08)",
            marginBottom: 10,
            transition: "background 0.2s"
          }}
        >
          Add Test
        </button>
        <div style={{
          color: "#2368d3",
          fontSize: "1.01rem",
          marginTop: "18px"
        }}>
          Enter all details and click "Add Test" to save.
        </div>
      </div>
    </div>
  );
}
