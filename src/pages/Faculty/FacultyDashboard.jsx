import Login from "../Student/Login";  // Updated import path
import { useState, useEffect } from "react";
import QRCode from "react-qr-code";

const FacultyDashboard = () => {
  const [qrValue, setQrValue] = useState("");
  const [userName, setUserName] = useState("Faculty Member"); // Replace with actual user data

  useEffect(() => {
    const generateQR = async () => {
      try {
        const response = await fetch("http://your-api-endpoint.com/qr-code?subjectId=SUBJECT_ID_HERE");
        const data = await response.json();
        setQrValue(data.token);
      } catch (error) {
        console.error("QR Code Fetch Error:", error);
      }
    };

    generateQR(); // Initial fetch
    const interval = setInterval(generateQR, 3000); // Refresh every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div>
      <h1>Faculty Dashboard</h1>
      <p>Welcome, {userName}</p>
      {qrValue ? <QRCode value={qrValue} size={256} /> : <p>Loading QR Code...</p>}
      <Login /> {/* Use the Login component here */}
    </div>
  );
};

export default FacultyDashboard;