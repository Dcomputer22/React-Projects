import { useState } from "react";
import "./QRCodeGenerator.scss";
import QRCode from "react-qr-code";

const QRCodeGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  const handleGenerateQRCode = () => {
    setQrCode(input);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleGenerateQRCode();
  };

  return (
    <div className={"qr-code-generator-wrapper"}>
      <input
        onKeyDown={handleKeyDown}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        name="qr-code"
        id="qr-code"
        value={input}
        placeholder="Type input to generate code"
      />
      <button
        disabled={input && input.trim() !== "" ? false : true}
        onClick={handleGenerateQRCode}
      >
        Generate
      </button>

      <div>
        {qrCode && <QRCode id="qr-code-value" value={qrCode} size={300} bgColor="#ffffff" />}
      </div>
    </div>
  );
};

export default QRCodeGenerator;
