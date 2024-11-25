
import Split from "react-split";

const Custom = () => {
  return (
    <Split
      sizes={[50, 50]}
      direction="horizontal"
      gutterSize={15}
      gutter={(index, direction) => {
        const gutter = document.createElement("div");
        gutter.className = `custom-gutter ${direction}`;
        return gutter;
      }}
    >
      <div className="custom-gutter">Pane 1</div>
      <div className="custom-gutter-two">Pane 2</div>
    </Split>
  );
};

export default Custom;
