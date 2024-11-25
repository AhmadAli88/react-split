import { useState } from "react";
import Split from "react-split";

const Vertical = () => {
  const [code, setCode] = useState("<h1>Hello, World!</h1>");

  return (
    <Split sizes={[50, 50]} direction="vertical" style={{ height: "100vh" }}>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        style={{ width: "100%", height: "100%", padding: "10px" }}
      />
      <iframe
        srcDoc={code}
        style={{ width: "100%", height: "100%", border: "none" }}
      ></iframe>
    </Split>
  );
};

export default Vertical;
