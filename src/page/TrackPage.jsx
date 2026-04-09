import { useParams } from "react-router-dom";

function TrackPage() {
  const { code } = useParams();

  const steps = [
    "Shipment Information Received",
    "Departed Origin Country",
    "Arrived in Destination Country",
    "Held at Customs",
    "Out for Delivery",
    "Delivered"
  ];

  const currentStep = 3; // stops at "Held at Customs"

  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      background: "#f4f6f8",
      minHeight: "100vh",
      padding: "20px"
    }}>

      <div style={{
        maxWidth: "800px",
        margin: "auto",
        background: "#fff",
        padding: "30px",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)"
      }}>

        {/* HEADER */}
        <h2 style={{ marginBottom: "5px" }}>Shipment Tracking</h2>
        <p style={{ color: "#666" }}>Tracking Code: {code}</p>

        {/* Barcode Style */}
        <div style={{
          margin: "15px 0",
          padding: "10px",
          background: "#000",
          color: "#fff",
          fontFamily: "monospace",
          letterSpacing: "3px",
          textAlign: "center"
        }}>
          ||||| || || ||||| ||| ||||
        </div>

        <hr />

        {/* PROGRESS TRACKER */}
        <div style={{ marginTop: "20px" }}>
          <h3>Status Progress</h3>

          <div style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "12px"
          }}>
            {steps.map((step, index) => (
              <div key={index} style={{
                textAlign: "center",
                width: "100%"
              }}>
                <div style={{
                  width: "14px",
                  height: "14px",
                  borderRadius: "50%",
                  margin: "auto",
                  background: index <= currentStep ? "#2e7d32" : "#ccc"
                }}></div>

                <p style={{
                  marginTop: "5px",
                  color: index === currentStep ? "#000" : "#777",
                  fontWeight: index === currentStep ? "bold" : "normal"
                }}>
                  {step}
                </p>
              </div>
            ))}
          </div>

          {/* Progress Bar */}
          <div style={{
            height: "6px",
            background: "#ddd",
            marginTop: "10px",
            borderRadius: "5px"
          }}>
            <div style={{
              width: `${(currentStep / (steps.length - 1)) * 100}%`,
              height: "100%",
              background: "#2e7d32",
              borderRadius: "5px"
            }}></div>
          </div>
        </div>

        <hr />

        {/* STATUS BOX */}
        <div style={{
          padding: "15px",
          background: "#fff3cd",
          border: "1px solid #ffeeba",
          borderRadius: "6px"
        }}>
          <strong>Status:</strong>{" "}
          <span style={{ color: "#856404" }}>
            Held at Customs
          </span>
          <br />
          <strong>Location:</strong> Poschiavo, Graubünden (GR), Switzerland
        </div>

        {/* DETAILS */}
        <div style={{ marginTop: "25px" }}>
          <p><strong>Shipment Origin:</strong> United States (Texas)</p>
          <p><strong>Department:</strong> International Logistics Division</p>
        </div>

        <hr />

        {/* RECEIVER */}
        <div>
          <h3>Consignee</h3>
          <p>
            Maël Bittel<br />
            Bühlstrasse 53a<br />
            3012 Bern, Switzerland<br />
            Email: maelbittel@protonmail.ch<br />
            Phone: +41 78 220 43 77
          </p>
        </div>

        <hr />

        {/* MESSAGE */}
        <p style={{ color: "#555" }}>
          This shipment has arrived in Switzerland and is currently undergoing
          customs clearance procedures. Further updates will be provided once
          the shipment has been processed and released for delivery.
        </p>

      </div>
    </div>
  );
}

export default TrackPage;