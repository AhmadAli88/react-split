import  { useState } from "react";
import Split from "react-split";

const Persisting = () => {
  const [sizes, setSizes] = useState(() => {
    const savedSizes = localStorage.getItem("split-sizes");
    return savedSizes ? JSON.parse(savedSizes) : [50, 50];
  });

  const handleDragEnd = (newSizes) => {
    setSizes(newSizes);
    localStorage.setItem("split-sizes", JSON.stringify(newSizes));
  };

  return (
    <Split
      sizes={sizes}
      minSize={100}
      direction="horizontal"
      onDragEnd={handleDragEnd}
      style={{ height: "100vh" }}
    >
      <div style={{ background: "#e0e0e0", padding: "20px" }}>Pane 1</div>
      <div style={{ background: "#c0c0c0", padding: "20px" }}>Pane 2</div>
    </Split>
  );
};

export default Persisting;
