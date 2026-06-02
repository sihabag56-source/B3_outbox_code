import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const SiteQRCode = () => {
  // 동지의 배포된 사이트 주소입니다.
  const url = "https://outbox-lime.vercel.app/";

  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '20px', 
      backgroundColor: '#f9f9f9', 
      borderRadius: '10px',
      border: '1px solid #ddd',
      margin: '20px auto',
      maxWidth: '200px'
    }}>
      <p style={{ fontSize: '14px', marginBottom: '10px', fontWeight: 'bold' }}>
        모바일 접속 QR
      </p>
      <QRCodeCanvas 
        value={url} 
        size={150} 
        level={"H"} 
        includeMargin={true}
      />
    </div>
  );
};

export default SiteQRCode;