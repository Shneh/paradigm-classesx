import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/login`, {
        username,
        password
      });
      localStorage.setItem("token", res.data.token);
      navigate("/teacher");
    } catch (err) {
      setError("Invalid login");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "stretch",
        background: "linear-gradient(120deg, #e0eafc, #cfdef3 100%)",
        fontFamily: "Segoe UI, sans-serif",
        margin: 0,
        padding: 0
      }}
    >
      {/* Sidebar or Welcome Panel */}
      <div
        style={{
          flex: "1 1 0",
          background: "linear-gradient(100deg,#2368d3 70%,#71aafe 100%)",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <h1 style={{fontSize: "2.4rem", marginBottom: 10, letterSpacing:1}}>Paradigm Classes</h1>
        <p style={{ fontSize: "1.12rem", opacity:0.89, padding: "0 36px", maxWidth:320, lineHeight:1.6 }}>
          Welcome to secure teacher login. Manage results, updates, and more with peace of mind.
        </p>
      </div>

      {/* Login Form */}
      <div
        style={{
          minWidth: 350,
          maxWidth: 420,
          width: "100%",
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 6px 40px rgba(32,50,114,0.12)",
          borderTopRightRadius: "32px",
          borderBottomRightRadius: "32px",
          padding: "64px 36px"
        }}
      >
        <h2 style={{ color: "#203272", marginBottom: 30, fontWeight:"semiBold" }}>Teacher Login</h2>
        <input
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "20px",
            borderRadius: "8px",
            border: "1px solid #c7d9e7",
            fontSize: "1rem",
            background: "#f4f8ff"
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "24px",
            borderRadius: "8px",
            border: "1px solid #c7d9e7",
            fontSize: "1rem",
            background: "#f4f8ff"
          }}
        />
        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "14px 0",
            background: "linear-gradient(90deg,#2368d3 70%,#52a6fa 100%)",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "1.1rem",
            fontWeight: 600,
            boxShadow: "0 2px 14px rgba(35,104,211,0.07)",
            cursor: "pointer",
            marginBottom: 10,
            transition: "background 0.2s"
          }}
        >
          Login
        </button>
        {error && <p style={{ color: "#ee244e", marginTop: 8 }}>{error}</p>}

        {/* Optional: Additional Links/Note */}
        <div style={{marginTop:32, fontSize: "0.97rem", color:"#6183a2", textAlign:"center"}}>
          <p>Only authorized staff may access.<br />If problems persist, contact admin.</p>
        </div>
      </div>
    </div>
  );
}
