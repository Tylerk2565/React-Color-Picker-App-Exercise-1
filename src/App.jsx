import ColorPicker from "./components/ColorPicker";
import { useState } from "react";

function App() {
  const colors = ["red", "green", "blue", "yellow", "purple", "orange"];
  const [backgroundColor, setBackgroundColor] = useState("lightgray");

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
      <h1 className="text-4xl font-extrabold mb-6 text-white drop-shadow-lg">
        Color Picker Application
      </h1>
      <div className="shadow-lg">
        <ColorPicker
          colors={colors}
          backgroundColor={backgroundColor}
          setBackgroundColor={setBackgroundColor}
        />
      </div>
    </div>
  );
}

export default App;
