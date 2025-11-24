import { useEffect, useState } from "react";
import axios from "axios";

export default function Results() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchResults();
  }, []);

  const fetchResults = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/results`);
    setResults(res.data);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(97deg,#e0eafc 51%,#cfdef3 110%)",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "46px 36px",
          borderRadius: "18px",
          boxShadow: "0 6px 32px rgba(35,104,211,0.11)",
          minWidth: 350,
          maxWidth: 900,
          width: "100%" 
        }}
      >
        <h2
          style={{
            color: "#2368d3",
            fontWeight: 700,
            fontSize: "2rem",
            textAlign: "center",
            marginBottom: 28,
            letterSpacing: 1,
          }}
        >
          Student Performance Leaderboard
        </h2>
        <div style={{
          overflowX: "auto",
          margin: "0 auto",
          marginBottom: 12,
          borderRadius: "10px",
          boxShadow: "0 1px 11px rgba(35,104,211,0.05)"
        }}>
          <table
            style={{
              borderCollapse: "collapse",
              width: "100%",
              minWidth: "420px",
              fontSize: "1.07rem",
              background: "#f7fbff",
              borderRadius: "8px",
              overflow: "hidden"
            }}
          >
            <thead>
              <tr>
                {results.length > 0 &&
                  Object.keys(results[0]).map(key => (
                    <th
                      key={key}
                      style={{
                        background: "#ecf3fa",
                        color: "#2368d3",
                        fontWeight: 600,
                        padding: "12px 6px",
                        borderBottom: "2px solid #d7e0f3",
                        textTransform: "uppercase"
                      }}
                    >
                      {key}
                    </th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {results.map((row, i) => (
                <tr key={i}>
                  {Object.values(row).map((val, j) => (
                    <td
                      key={j}
                      style={{
                        background: "#fff",
                        color: "#29376a",
                        padding: "11px 8px",
                        textAlign: "center",
                        borderBottom: "1px solid #e6eaf2"
                      }}
                    >
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
              {results.length === 0 &&
                <tr>
                  <td colSpan={6} style={{
                    padding: "28px 0",
                    color: "#6183a2",
                    textAlign: "center"
                  }}>
                    No results to display.
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>
        <div style={{
          textAlign: "center",
          marginTop: "24px",
          color: "#2368d3",
          fontSize: "1rem"
        }}>
          View and compare top performers by tests and subjects.
        </div>
      </div>
    </div>
  );
}
