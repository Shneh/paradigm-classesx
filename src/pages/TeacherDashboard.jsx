import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function TeacherDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/login");
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        fontFamily: "Segoe UI, sans-serif",
        background: "linear-gradient(90deg,#e0eafc 60%,#cfdef3 100%)"
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: 240,
          background: "linear-gradient(120deg,#2368d3 90%,#52a6fa 130%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "54px 0",
          color: "#fff",
          boxShadow: "0 8px 30px rgba(32,50,114,0.13)",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: 18 }}>Teacher Panel</h2>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize:"1.13rem" }}>
          <li style={{ margin: "18px 0" }}>Add Student</li>
          <li style={{ margin: "18px 0" }}>Add Test</li>
          <li style={{ margin: "18px 0" }}>Enter Marks</li>
          <li style={{ margin: "18px 0" }}>View Results</li>
        </ul>
      </div>

      {/* Main dashboard */}
      <main
        style={{
          flex: 1,
          padding: "48px 32px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "#f9fafd"
        }}
      >
        <h2 style={{ color: "#203272", fontWeight: 600, fontSize:"2.2rem", marginBottom:26 }}>
          Teacher Dashboard
        </h2>
        <div style={{
          display: "flex",
          gap: "22px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop:28
        }}>
          <Link to="/add-student">
            <button style={{
              padding: "22px 36px",
              fontSize: "1.07rem",
              background: "linear-gradient(90deg,#2395b8 40%,#08e6d6 150%)",
              color: "#fff",
              border: "none",
              borderRadius: "14px",
              boxShadow: "0 2px 12px rgba(35,149,184,0.07)",
              cursor: "pointer",
              fontWeight: 600,
              margin: "10px",
              transition: "background 0.2s"
            }}>
              ➕ Add New Student
            </button>
          </Link>
          <Link to="/add-test">
            <button style={{
              padding: "22px 36px",
              fontSize: "1.07rem",
              background: "linear-gradient(90deg,#2368d3 70%,#52a6fa 130%)",
              color: "#fff",
              border: "none",
              borderRadius: "14px",
              boxShadow: "0 2px 12px rgba(35,104,211,0.07)",
              cursor: "pointer",
              fontWeight: 600,
              margin: "10px",
              transition: "background 0.2s"
            }}>
              📝 Add New Test
            </button>
          </Link>
          <Link to="/add-marks">
            <button style={{
              padding: "22px 36px",
              fontSize: "1.07rem",
              background: "linear-gradient(90deg,#19b16e 70%,#45fede 130%)",
              color: "#fff",
              border: "none",
              borderRadius: "14px",
              boxShadow: "0 2px 12px rgba(25,177,110,0.08)",
              cursor: "pointer",
              fontWeight: 600,
              margin: "10px",
              transition: "background 0.2s"
            }}>
              🗒️ Enter Marks
            </button>
          </Link>
          <Link to="/results">
            <button style={{
              padding: "22px 36px",
              fontSize: "1.07rem",
              background: "linear-gradient(90deg,#203272 30%,#52a6fa 120%)",
              color: "#fff",
              border: "none",
              borderRadius: "14px",
              boxShadow: "0 2px 12px rgba(32,50,114,0.08)",
              cursor: "pointer",
              fontWeight: 600,
              margin: "10px",
              transition: "background 0.2s"
            }}>
              📊 View Results
            </button>
          </Link>
        </div>
        {/* Optionally add helpful info or stats below */}
        <div style={{marginTop:42, fontSize:"1.08rem", color:"#32647f", textAlign:"center"}}>
          <p>
            Welcome, Teacher! Use the dashboard to easily manage students and performances.<br/>
            For help, contact your admin or check FAQs.
          </p>
        </div>
      </main>
    </div>
  );
}
