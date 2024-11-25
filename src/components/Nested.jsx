
import Split from "react-split";

const Nested = () => {
  return (
    <Split sizes={[30, 70]} direction="vertical" style={{ height: "100vh" }}>
      <div style={{ background: "#b0b0b0", padding: "10px" }}>Top Pane</div>
      <Split sizes={[50, 50]} direction="horizontal">
        <div style={{ background: "#909090", padding: "10px" }}>Left Pane</div>
        <div style={{ background: "#707070", padding: "10px" }}>Right Pane</div>
      </Split>
    </Split>
  );
};

export default Nested;
