import QrScanner from "react-qr-scanner";

const Scan = () => {
  const handleScan = (data) => {
    if (data) {
      console.log("Scanned Data:", data);
      // Send data to the backend for validation
    }
  };

  const handleError = (err) => {
    console.error("Error scanning QR code:", err);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Scan QR Code</h1>
      <QrScanner
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "50%" }}
      />
    </div>
  );
};

export default Scan;
