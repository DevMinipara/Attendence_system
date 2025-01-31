import  { useState } from "react";
import QRCode from "react-qr-code";


const AdminDashboard = () => {
  const [data, setData] = useState("Attendance Code");

  const handleGenerateQR = () => {
    // Generate a random attendance code
    setData("ATTENDANCE-" + new Date().toISOString());
  };

  return (
    <div style={{ textAlign: "center" }}>
      
      <h1>Admin Dashboard</h1>
      <button onClick={handleGenerateQR}>Generate QR Code</button>
      <div style={{ marginTop: "20px" }}>
        {data && <QRCode value={data} />}
      </div>
    </div>
  );
};

export default AdminDashboard;
