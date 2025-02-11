import { useState } from "react";
// import QrReader from "react-qr-reader";

export default function StudentDashboard() {
  const [scanning, setScanning] = useState(false);
  const [otp, setOtp] = useState("");
  const [userName, setUserName] = useState("John Doe"); // Replace with actual user data

  const handleScan = async (data) => {
    if (data) {
      setScanning(false);
      try {
        const response = await fetch("http://your-api-endpoint.com/verify-otp", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token: data, subjectId: "SUBJECT_ID_HERE" }),
        });

        if (response.ok) {
          alert("OTP sent to your email");
        } else {
          alert("Error verifying QR code");
        }
      } catch (error) {
        console.error("API Error:", error);
        alert("Failed to connect to server");
      }
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const verifyOtp = async () => {
    if (!otp) {
      alert("Please enter OTP");
      return;
    }

    try {
      const response = await fetch("http://your-api-endpoint.com/confirm-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ otp }),
      });

      if (response.ok) {
        alert("OTP verified successfully");
      } else {
        alert("Invalid OTP");
      }
    } catch (error) {
      console.error("OTP Verification Error:", error);
      alert("Failed to verify OTP");
    }
  };
  
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Welcome to Student Portal</h1>
      <button onClick={() => navigate("/login")}>Student Login</button>

      {scanning ? (
        <QrReader delay={300} onError={handleError} onScan={handleScan} style={{ width: "300px" }} />
      ) : (
        <button onClick={() => setScanning(true)}>Scan QR Code</button>
      )}

      <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP" />
      <button onClick={verifyOtp}>Verify OTP</button>
    </div>
    
    
  );
}
