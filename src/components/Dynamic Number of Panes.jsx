
import Split from "react-split";

const Dynamic = () => {
  const panes = ["Pane 1", "Pane 2", "Pane 3"];

  return (
    <Split sizes={Array(panes.length).fill(100 / panes.length)} direction="horizontal">
      {panes.map((pane, index) => (
        <div key={index} style={{ background: "#d0d0d0", padding: "10px" }}>
          {pane}
        </div>
      ))}
    </Split>
  );
};

export default Dynamic;
