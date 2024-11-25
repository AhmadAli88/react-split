
import Split from "react-split";

const Basic = () => {
  return (
    <Split
      sizes={[50, 50]} // Proportional sizes of each pane (in percentage)
      minSize={100} // Minimum size of each pane (in pixels)
      gutterSize={10} // Space occupied by the resizable gutter
      direction="horizontal" // Can be 'horizontal' or 'vertical'
      style={{ height: "100vh" }}
    >
      <div style={{ background: "#f0f0f0", padding: "20px" }}>Pane 1</div>
      <div style={{ background: "#d0d0d0", padding: "20px" }}>Pane 2</div>
    </Split>
  );
};

export default Basic;
