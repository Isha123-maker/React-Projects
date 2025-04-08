import { useState } from 'react';

const RandomColorGenerator = () => {
  // Named colors for variety
  const namedColors = [
    'Crimson', 'Teal', 'Goldenrod', 'RoyalBlue', 'Orchid',
    'ForestGreen', 'Tomato', 'SlateBlue', 'DarkOrange', 'DeepPink'
  ];

  const [color, setColor] = useState({
    rgb: 'rgb(255, 255, 255)',
    hex: '#FFFFFF',
    name: 'White'
  });

  const generateRandomColor = () => {
    // Generate random RGB values (0-255)
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Convert to HEX
    const hex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`.toUpperCase();

    // Get a random named color
    const name = namedColors[Math.floor(Math.random() * namedColors.length)];

    setColor({
      rgb: `rgb(${r}, ${g}, ${b})`,
      hex: hex,
      name: name
    });
  };

  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen p-4 transition-colors duration-300"
      style={{ backgroundColor: color.rgb }}
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-xl shadow-xl text-center max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Random Color Generator</h1>
        
        <div className="space-y-4 mb-8">
          <div className="p-4 rounded-lg bg-gray-100">
            <h2 className="font-semibold text-gray-700">RGB</h2>
            <p className="text-xl font-mono">{color.rgb}</p>
          </div>
          
          <div className="p-4 rounded-lg bg-gray-100">
            <h2 className="font-semibold text-gray-700">HEX</h2>
            <p className="text-xl font-mono">{color.hex}</p>
          </div>
          
          <div className="p-4 rounded-lg bg-gray-100">
            <h2 className="font-semibold text-gray-700">Color Name</h2>
            <p className="text-xl font-mono">{color.name}</p>
          </div>
        </div>

        <button
          onClick={generateRandomColor}
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg shadow-md transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Generate Random Color
        </button>
      </div>
    </div>
  );
};

export default RandomColorGenerator;