import { useState } from 'react';
import QRCode from 'react-qr-code';

const QRCodeGenerator = () => {
  const [inputText, setInputText] = useState('');
  const [qrValue, setQrValue] = useState('');

  const handleGenerate = (e) => {
    e.preventDefault();
    if (inputText.trim()) {
      setQrValue(inputText);
    }
  };

  const handleDownload = () => {
    if (!qrValue) return;
    
    const canvas = document.getElementById('qr-code-canvas');
    if (canvas) {
      const pngUrl = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.href = pngUrl;
      downloadLink.download = `qr-code-${qrValue.substring(0, 10)}.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  return (
    <div className="bg-gray-50 py-12 px-6 sm:px-6 lg:px-8">
      <div className="w-[420px] mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
        <h1 className="text-6xl font-bold text-center text-gray-800 mb-6">QR Code Generator</h1>
        
        <form onSubmit={handleGenerate} className="mb-6">
          <div className="mb-4">
            <label htmlFor="qr-input" className="block text-md font-medium text-gray-700 mb-1">
              Enter text or URL
            </label>
            <input
              type="text"
              id="qr-input"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type something..."
              className="w-full px-4 py-4 border border-gray-300 text-2xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-2xl font-medium py-4 px-4 rounded-md transition duration-150 ease-in-out"
          >
            Generate QR Code
          </button>
        </form>

        {qrValue && (
          <div className="text-center">
            <div className="flex justify-center mb-4 p-4 bg-gray-100 rounded-lg">
              <QRCode
                id="qr-code-canvas"
                value={qrValue}
                size={200}
                level="H"
                includeMargin={true}
                renderAs="canvas"
              />
            </div>
            
            <div className="mb-4">
              <p className="text-md text-gray-600 break-all">
                <span className="font-medium">Encoded:</span> {qrValue}
              </p>
            </div>
            
            <button
              onClick={handleDownload}
              className="bg-green-600 hover:bg-green-700 text-white text-2xl font-medium py-4 px-4 rounded-md transition duration-150 ease-in-out"
            >
              Download QR Code
            </button>
          </div>
        )}

        {!qrValue && (
          <div className="text-center py-8">
            <div className="text-gray-400 mb-2">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
              </svg>
            </div>
            <p className="text-gray-500">Your QR code will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QRCodeGenerator;