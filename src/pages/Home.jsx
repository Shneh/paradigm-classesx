import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(120deg, #e0eafc, #cfdef3 100%)",
        fontFamily: "Segoe UI, sans-serif",
        margin: 0,
        padding: 0
      }}
    >
      {/* Hero Section */}
      <div style={{
        flex: "1 1 350px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(85deg,#2368d3 70%,#9cc7fa 120%)",
        color: "#fff",
        boxShadow: "0 6px 24px rgba(32,50,114,0.09)"
      }}>
        <h1 style={{ fontSize: "2.8rem", marginBottom: 8, letterSpacing:1 }}>
          Welcome to Paradigm Classes
        </h1>
        <div style={{ fontSize: "1.35rem", fontWeight:500, marginBottom: 18 }}>
          Guiding students of classes IX, X, XI, and XII toward excellence.
        </div>
        <div>
          <Link to="/results">
            <button style={{
              margin: "10px",
              padding: "12px 32px",
              fontSize: "1rem",
              background: "#fff",
              color: "#2368d3",
              borderRadius: "8px",
              border: "none",
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "0 2px 12px rgba(35,104,211,0.08)"
            }}>📄 View Student Results</button>
          </Link>
          <Link to="/login">
            <button style={{
              margin: "10px",
              padding: "12px 32px",
              fontSize: "1rem",
              background: "#203272",
              color: "#fff",
              borderRadius: "8px",
              border: "none",
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "0 2px 12px rgba(37,51,124,0.08)"
            }}>🔐 Teacher Login</button>
          </Link>
        </div>
      </div>

      {/* About Section */}
      <section style={{
        background: "#f8fafc",
        textAlign: "center",
        padding: "46px 16px 18px 16px",
        flex: "0 1 auto"
      }}>
        <h2 style={{ color: "#2467d3", marginBottom: "11px" }}>About Us</h2>
        <p style={{ color: "#273963", fontSize: "1.12rem", lineHeight:1.6, margin: "0 auto", maxWidth: 640 }}>
          Paradigm Classes is dedicated to student-centric education, expert faculty, and regular progress tracking. Our tailored guidance helps learners master science and mathematics, score higher, and succeed with confidence.
        </p>
      </section>

      {/* Courses Section */}
      <section style={{
        background: "#eaf2fc",
        textAlign: "center",
        padding: "40px 12px",
        flex: "0 1 auto"
      }}>
        <h2 style={{ color: "#2472be", marginBottom: "16px" }}>Classes & Subjects</h2>
        <div style={{ display:"flex", justifyContent:"center", flexWrap:"wrap", gap:18 }}>
          <div style={{
            background: "#fff",
            borderRadius: "10px",
            padding: "20px 32px",
            boxShadow: "0 2px 10px rgba(36,103,211,0.06)",
            minWidth:160
          }}>
            <h3 style={{ color: "#2368d3", margin: "2px 0 8px" }}>Class IX/X</h3>
            <p>Science<br />Mathematics</p>
          </div>
          <div style={{
            background: "#fff",
            borderRadius: "10px",
            padding: "20px 32px",
            boxShadow: "0 2px 10px rgba(36,103,211,0.06)",
            minWidth:160
          }}>
            <h3 style={{ color: "#2368d3", margin: "2px 0 8px" }}>Class XI/XII</h3>
            <p>Physics<br />Chemistry<br />Mathematics/Biology</p>
          </div>
        </div>
      </section>

      {/* Notices Section */}
      <section style={{
        background: "#f2fafd",
        textAlign: "center",
        padding: "32px 10px 42px 10px",
        flex: "0 1 auto"
      }}>
        <h2 style={{ color: "#19b16e", marginBottom: "14px" }}>Latest Notices</h2>
        <ul style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          color: "#22563a",
          fontSize: "1.06rem"
        }}>
          <li>🎓 Admissions open for 2026 batch.</li>
          <li>📚 Next Parent-Teacher Meeting: 2nd Dec 2025.</li>
          <li>📝 Pre-final exam results will be published soon.</li>
        </ul>
      </section>
    </div>
  );
}
