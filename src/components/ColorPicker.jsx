const ColorPicker = ({ colors, backgroundColor, setBackgroundColor }) => {

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  const handleReset = () => {
    setBackgroundColor('lightgray');
  };

  return (
    <div className={`w-full max-w-screen-lg h-150 flex flex-col items-center justify-center mx-auto p-6 rounded-lg shadow-lg`} style={{ backgroundColor }}>
      <div className="flex flex-wrap justify-center mb-4">
        {colors.map((color, index) => (
          <button
            key={index}
            className="w-24 h-12 m-2 border-none cursor-pointer rounded-full shadow-md transition-transform transform hover:scale-110"
            style={{ backgroundColor: color }}
            onClick={() => handleColorChange(color)}
          >
            {color}
          </button>
        ))}
      </div>
      <button className="w-24 h-12 m-2 border cursor-pointer rounded-full bg-gray-200 hover:bg-gray-300 transition-colors shadow-md" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default ColorPicker;
