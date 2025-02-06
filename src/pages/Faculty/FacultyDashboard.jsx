import { useState, useEffect } from "react";
import QRCode from "react-qr-code";


export default function FacultyDashboard() {
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

    generateQR();
    const interval = setInterval(generateQR, 3000); // Refresh every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Faculty Dashboard</h1>
      <p>Welcome, {userName}</p>
      {qrValue ? <QRCode value={qrValue} size={256}  /> : <p>Loading QR Code...</p>}
    </div>
  );
}
