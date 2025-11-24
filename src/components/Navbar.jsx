import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "15px", background: "#0A2558", color: "white" }}>
      <h2 style={{ display: "inline" }}>Paradigm Classes</h2>

      <div style={{ float: "right" }}>
        <Link to="/" style={{ marginRight: "20px", color: "white" }}>Home</Link>
        <Link to="/results" style={{ marginRight: "20px", color: "white" }}>Results</Link>
        <Link to="/login" style={{ marginRight: "20px", color: "white" }}>Login</Link>
      </div>
    </nav>
  );
}
