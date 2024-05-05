import React from "react";
import useRenderer from "./hooks/useRenderer/useRenderer";

function App() {
  const [canvasRef, setCanvasRef] = React.useState<HTMLCanvasElement>(null)
  useRenderer(canvasRef)


  return (
    <>
      <div>
        <canvas ref={obj => setCanvasRef(obj)}></canvas>
      </div>
    </>
  );
}

export default App;
