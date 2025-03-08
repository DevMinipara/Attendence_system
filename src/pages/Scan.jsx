import { useState } from "react";
import QrScanner from "react-qr-scanner";
import "./Scan.css";

const Scan = () => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [scanning, setScanning] = useState(true);

  const handleScan = (data) => {
    if (data) {
      setResult(data.text);
      setScanning(false);
      // You can add your API call or validation logic here
      console.log("Scanned Data:", data.text);
    }
  };

  const handleError = (err) => {
    setError(err.message);
    console.error("Error scanning QR code:", err);
  };

  const handleReset = () => {
    setResult(null);
    setError(null);
    setScanning(true);
  };

  return (
    <div className="scanner-container">
      <div className="scanner-content">
        <h1>QR Code Scanner</h1>
        <p className="scanner-subtitle">
          Position the QR code within the frame to scan
        </p>

        <div className="scanner-area">
          {scanning ? (
            <QrScanner
              delay={300}
              onError={handleError}
              onScan={handleScan}
              constraints={{
                audio: false,
                video: { facingMode: "environment" }
              }}
              style={{ width: "100%" }}
            />
          ) : (
            <div className="result-container">
              <h3>Scan Result:</h3>
              <p className="scan-result">{result}</p>
              <button className="scan-again-btn" onClick={handleReset}>
                Scan Again
              </button>
            </div>
          )}
        </div>

        {error && (
          <div className="error-message">
            <p>{error}</p>
            <button className="retry-btn" onClick={handleReset}>
              Retry
            </button>
          </div>
        )}

        <div className="scanner-instructions">
          <h3>Instructions:</h3>
          <ol>
            <li>Allow camera access when prompted</li>
            <li>Position the QR code within the frame</li>
            <li>Hold steady until the code is scanned</li>
            <li>View the scan result below</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Scan;
