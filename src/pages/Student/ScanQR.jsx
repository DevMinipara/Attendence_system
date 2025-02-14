import React, { useState, useEffect } from "react";
import QrScanner from "qr-scanner";
import qrScannerWorkerPath from "qr-scanner/qr-scanner-worker.min.js";

QrScanner.WORKER_PATH = qrScannerWorkerPath;

const ScanQR = () => {
  const [result, setResult] = useState("");
  const [scanner, setScanner] = useState(null);

  useEffect(() => {
    const video = document.createElement("video");
    const qrScanner = new QrScanner(
      video,
      (res) => {
        setResult(res.data);
        alert(`Scanned QR Code: ${res.data}`);
        qrScanner.stop();
      },
      {
        returnDetailedScanResult: true,
      }
    );

    setScanner(qrScanner);

    return () => {
      qrScanner.stop();
      qrScanner.destroy();
    };
  }, []);

  const handleScan = () => {
    if (scanner) {
      scanner.start();
    }
  };

  return (
    <div>
      <h2>Scan QR Code</h2>
      <button onClick={handleScan}>Start Scanning</button>
      {result && <p>Scanned Data: {result}</p>}
    </div>
  );
};

export default ScanQR;
