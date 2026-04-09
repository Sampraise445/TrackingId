import { Routes, Route, Link } from "react-router-dom";
import TrackPage from "./page/TrackPage";

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f5f7fb",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    textAlign: "center",
    padding: "40px",
    borderRadius: "12px",
    background: "#ffffff",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    width: "90%",
    maxWidth: "420px",
  },
  title: {
    fontSize: "28px",
    marginBottom: "10px",
  },
  text: {
    color: "#555",
    marginBottom: "25px",
  },
  button: {
    padding: "12px 22px",
    background: "#ffcc00",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    borderRadius: "6px",
    transition: "all 0.2s ease-in-out",
  },
};

function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>📦 USPS Tracking</h1>
        <p style={styles.text}>Access shipment tracking information</p>

        <Link to="/track/SWZ-8392-ABX" style={{ textDecoration: "none" }}>
          <button
            style={styles.button}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          >
            Track Package
          </button>
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/track/:code" element={<TrackPage />} />
    </Routes>
  );
}

export default App;