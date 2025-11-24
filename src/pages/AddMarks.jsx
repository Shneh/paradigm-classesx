import { useEffect, useState } from "react";
import axios from "axios";

export default function AddMarks() {
  const [students, setStudents] = useState([]);
  const [tests, setTests] = useState([]);
  const [form, setForm] = useState({
    studentId: "",
    testId: "",
    obtainedMarks: ""
  });

  useEffect(() => {
    fetchStudents();
    fetchTests();
  }, []);

  const fetchStudents = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/students`);
    setStudents(res.data);
  };

  const fetchTests = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/tests`);
    setTests(res.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/marks`, {
        studentId: Number(form.studentId),
        testId: Number(form.testId),
        obtainedMarks: Number(form.obtainedMarks)
      });
      alert("Marks added successfully!");
      setForm({ studentId: "", testId: "", obtainedMarks: "" });
    } catch (err) {
      alert("Error adding marks");
      console.log(err);
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
        background: "linear-gradient(108deg,#e0eafc 62%,#cfdef3 108%)",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "48px 38px",
          borderRadius: "18px",
          boxShadow: "0 6px 32px rgba(35,104,211,0.12)",
          minWidth: 340,
          maxWidth: 430,
          width: "100%",
        }}
      >
        <h2
          style={{
            color: "#2368d3",
            fontWeight: 700,
            fontSize: "2rem",
            textAlign: "center",
            marginBottom: 32,
            letterSpacing: 1,
          }}
        >
          Enter Marks
        </h2>
        <div style={{ marginBottom: 24 }}>
          <label style={{ color: "#234871", fontWeight: 500, marginBottom: 6, display: "block" }}>Student</label>
          <select
            name="studentId"
            value={form.studentId}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "13px",
              borderRadius: "8px",
              border: "1px solid #c7d9e7",
              background: "#f4f8ff",
              fontSize: "1.06rem",
              marginBottom: "8px",
            }}
          >
            <option value="">-- Select Student --</option>
            {students.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name} ({s.class})
              </option>
            ))}
          </select>
        </div>
        <div style={{ marginBottom: 24 }}>
          <label style={{ color: "#234871", fontWeight: 500, marginBottom: 6, display: "block" }}>Test</label>
          <select
            name="testId"
            value={form.testId}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "13px",
              borderRadius: "8px",
              border: "1px solid #c7d9e7",
              background: "#f4f8ff",
              fontSize: "1.06rem",
              marginBottom: "8px",
            }}
          >
            <option value="">-- Select Test --</option>
            {tests.map((t) => (
              <option key={t.id} value={t.id}>
                {t.test_name} (/{t.total_marks})
              </option>
            ))}
          </select>
        </div>
        <div style={{ marginBottom: 26 }}>
          <label style={{ color: "#234871", fontWeight: 500, marginBottom: 6, display: "block" }}>Marks Obtained</label>
          <input
            type="number"
            name="obtainedMarks"
            value={form.obtainedMarks}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "13px",
              borderRadius: "8px",
              border: "1px solid #c7d9e7",
              background: "#f4f8ff",
              fontSize: "1.06rem",
              marginBottom: "2px",
            }}
          />
        </div>
        <button
          onClick={handleSubmit}
          style={{
            width: "100%",
            padding: "15px 0",
            background: "linear-gradient(90deg,#2368d3 62%,#52a6fa 112%)",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            fontSize: "1.13rem",
            fontWeight: 650,
            cursor: "pointer",
            boxShadow: "0 2px 11px rgba(35,104,211,0.09)",
            marginBottom: 10,
            transition: "background 0.2s"
          }}
        >
          Submit Marks
        </button>
        <div style={{
          textAlign: "center",
          marginTop: "16px",
          color: "#2368d3",
          fontSize: "1rem"
        }}>
          Select student & test, then enter obtained marks.
        </div>
      </div>
    </div>
  );
}
