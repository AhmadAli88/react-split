import './App.css';
import Basic from './components/Basic';
import Custom from './components/Custom Styling for Gutters';
import Dynamic from './components/Dynamic Number of Panes';
import Nested from './components/Nested';
import Persisting from './components/PersistingSplitSizes';
import SplitPanelExamples from './components/Split';
import Vertical from './components/Vertical Split for Editor and Preview';

function App() {
  return (
    <div>
      <SplitPanelExamples />
      <Basic/>
      <Nested/>
      <Persisting/>
      <Dynamic/>
      <Vertical/>
      <Custom/>
    </div>
  );
}

export default App;
