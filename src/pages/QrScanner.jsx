import React, { useEffect, useRef } from 'react';
import QrScanner from 'qr-scanner'; // Make sure to install qr-scanner package

const QrScannerPage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const qrScanner = new QrScanner(videoRef.current, (result) => {
      alert(`QR Code scanned: ${result}`);
      // You can handle the scanned result here
    });

    qrScanner.start();

    return () => {
      qrScanner.stop(); // Stop the scanner when the component unmounts
    };
  }, []);

  return (
    <div className="qr-scanner-page">
      <h1>QR Scanner</h1>
      <video ref={videoRef} style={{ width: '100%', height: 'auto' }}></video>
    </div>
  );
};

export default QrScannerPage; 