/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Split from 'react-split';
import { FileText, Settings, Terminal, Code, Layout, Maximize2, Minimize2 } from 'lucide-react';

const SplitPanelExamples = () => {
  const [isVerticalCollapsed, setIsVerticalCollapsed] = useState(false);
  const [isHorizontalCollapsed, setIsHorizontalCollapsed] = useState(false);
  
  // Mock content for the panels
  const codeContent = `function HelloWorld() {
    return <div>Hello World!</div>;
}`;

  const terminalContent = `$ npm install react-split
> Installing dependencies...
> Done!`;

  return (
    <div className="h-screen w-full bg-gray-100 p-4">
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Basic Vertical Split</h2>
        <div className="h-[300px] border rounded-lg bg-white overflow-hidden">
          <Split 
            className="flex"
            direction="horizontal"
            sizes={[25, 75]}
            minSize={100}
            gutterSize={8}
            gutterStyle={() => ({
              backgroundColor: '#f1f5f9',
              cursor: 'col-resize'
            })}
          >
            <div className="bg-gray-50 p-4 overflow-auto">
              <h3 className="font-medium mb-2">Explorer</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <FileText size={16} />
                  <span>index.js</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FileText size={16} />
                  <span>styles.css</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-4">
              <pre className="font-mono text-sm">{codeContent}</pre>
            </div>
          </Split>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. IDE-Style Triple Split</h2>
        <div className="h-[400px] border rounded-lg bg-white overflow-hidden">
          <Split
            className="flex"
            sizes={[20, 60, 20]}
            minSize={[150, 200, 150]}
            gutterSize={8}
            gutterStyle={() => ({
              backgroundColor: '#f1f5f9',
              cursor: 'col-resize'
            })}
          >
            <div className="bg-gray-50 p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">Files</h3>
                <Layout size={16} className="text-gray-500" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <FileText size={16} />
                  <span>index.js</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FileText size={16} />
                  <span>styles.css</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col">
              <Split
                direction="vertical"
                sizes={[70, 30]}
                minSize={[100, 100]}
                gutterSize={8}
                gutterStyle={() => ({
                  backgroundColor: '#f1f5f9',
                  cursor: 'row-resize'
                })}
              >
                <div className="bg-white p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium">Editor</h3>
                    <Code size={16} className="text-gray-500" />
                  </div>
                  <pre className="font-mono text-sm">{codeContent}</pre>
                </div>
                <div className="bg-gray-900 text-gray-100 p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium">Terminal</h3>
                    <Terminal size={16} className="text-gray-400" />
                  </div>
                  <pre className="font-mono text-sm">{terminalContent}</pre>
                </div>
              </Split>
            </div>
            
            <div className="bg-gray-50 p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">Settings</h3>
                <Settings size={16} className="text-gray-500" />
              </div>
              <div className="space-y-2 text-sm">
                <div>Theme: Dark</div>
                <div>Font Size: 14px</div>
                <div>Tab Size: 2</div>
              </div>
            </div>
          </Split>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Collapsible Panels</h2>
        <div className="h-[300px] border rounded-lg bg-white overflow-hidden">
          <Split
            className="flex"
            sizes={isVerticalCollapsed ? [5, 95] : [30, 70]}
            minSize={isVerticalCollapsed ? [40, 200] : [200, 200]}
            gutterSize={8}
            gutterStyle={() => ({
              backgroundColor: '#f1f5f9',
              cursor: 'col-resize'
            })}
          >
            <div className="bg-gray-50 p-4 flex">
              <button
                onClick={() => setIsVerticalCollapsed(!isVerticalCollapsed)}
                className="ml-auto"
              >
                {isVerticalCollapsed ? (
                  <Maximize2 size={16} className="text-gray-500" />
                ) : (
                  <Minimize2 size={16} className="text-gray-500" />
                )}
              </button>
              {!isVerticalCollapsed && (
                <div className="ml-4">
                  <h3 className="font-medium mb-2">Sidebar</h3>
                  <div className="space-y-2">
                    <div>Item 1</div>
                    <div>Item 2</div>
                    <div>Item 3</div>
                  </div>
                </div>
              )}
            </div>
            <div className="bg-white p-4">
              <h3 className="font-medium mb-2">Main Content</h3>
              <p>Resize or collapse the sidebar using the button.</p>
            </div>
          </Split>
        </div>
      </div>
    </div>
  );
};

export default SplitPanelExamples;