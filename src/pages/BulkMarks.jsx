import { useEffect, useState } from "react";
import axios from "axios";

export default function BulkMarks() {
  const [tests, setTests] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectedTest, setSelectedTest] = useState("");
  const [marksData, setMarksData] = useState([]);

  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios.get(`${API}/tests`).then(res => setTests(res.data));
    axios.get(`${API}/students`).then(res => {
      setStudents(res.data);
      setMarksData(res.data.map(s => ({ studentId: s.id, obtainedMarks: "" })));
    });
  }, []);

  const updateMarks = (index, value) => {
    const updated = [...marksData];
    updated[index].obtainedMarks = value;
    setMarksData(updated);
  };

  const submitMarks = async () => {
    const token = localStorage.getItem("token");
    await axios.post(
      `${API}/marks/bulk`,
      { testId: selectedTest, marks: marksData },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    alert("Marks submitted successfully!");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(111deg, #e0eafc 60%, #cfdef3 110%)",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "46px 32px",
          borderRadius: "18px",
          boxShadow: "0 6px 32px rgba(35,104,211,0.10)",
          minWidth: 360,
          maxWidth: 700,
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
          Bulk Marks Entry
        </h2>
        <select
          value={selectedTest}
          onChange={e => setSelectedTest(e.target.value)}
          style={{
            width: "100%",
            padding: "13px",
            fontSize: "1.1rem",
            borderRadius: "8px",
            border: "1px solid #c7d9e7",
            background: "#f4f8ff",
            marginBottom: "22px"
          }}
        >
          <option value="">Select Test</option>
          {tests.map(t => (
            <option key={t.id} value={t.id}>{t.test_name}</option>
          ))}
        </select>
        {selectedTest && (
          <>
            <div style={{
              overflowX: "auto",
              borderRadius: "10px",
              boxShadow: "0 1px 11px rgba(35,104,211,0.04)",
              marginBottom: "22px",
            }}>
              <table
                style={{
                  borderCollapse: "collapse",
                  width: "100%",
                  minWidth: "350px",
                  background: "#f7fbff",
                  fontSize: "1.08rem"
                }}
              >
                <thead>
                  <tr>
                    <th
                      style={{
                        background: "#ecf3fa",
                        color: "#2368d3",
                        fontWeight: 600,
                        padding: "12px 10px",
                        borderBottom: "2px solid #d7e0f3",
                      }}
                    >Student</th>
                    <th
                      style={{
                        background: "#ecf3fa",
                        color: "#2368d3",
                        fontWeight: 600,
                        padding: "12px 10px",
                        borderBottom: "2px solid #d7e0f3",
                      }}
                    >Marks</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((s, index) => (
                    <tr key={s.id}>
                      <td
                        style={{
                          background: "#fff",
                          color: "#29376a",
                          padding: "11px 10px",
                          textAlign: "left",
                          borderBottom: "1px solid #e6eaf2"
                        }}
                      >
                        {s.name} ({s.class})
                      </td>
                      <td
                        style={{
                          background: "#fff",
                          padding: "11px 6px",
                          textAlign: "center",
                          borderBottom: "1px solid #e6eaf2"
                        }}
                      >
                        <input
                          type="number"
                          value={marksData[index]?.obtainedMarks || ""}
                          onChange={e => updateMarks(index, e.target.value)}
                          style={{
                            width: "70px",
                            padding: "9px",
                            borderRadius: "7px",
                            border: "1px solid #c7d9e7",
                            fontSize: "1.06rem",
                            background: "#f3f9fd",
                          }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button
              onClick={submitMarks}
              style={{
                width: "100%",
                padding: "15px 0",
                background: "linear-gradient(90deg,#2368d3 60%,#52a6fa 110%)",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                fontSize: "1.13rem",
                fontWeight: 650,
                cursor: "pointer",
                boxShadow: "0 2px 11px rgba(35,104,211,0.07)",
                marginTop: 8
              }}
            >
              Submit All Marks
            </button>
            <div
              style={{
                textAlign: "center",
                marginTop: "16px",
                color: "#2368d3",
                fontSize: "1rem"
              }}
            >
              Enter marks for all students below and submit in one click.
            </div>
          </>
        )}
      </div>
    </div>
  );
}
