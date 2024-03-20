import { ReactFlowProvider } from 'react-flow-renderer';
import 'reactflow/dist/style.css';
import './Main.scss';
import Sidebar from '../Sidebar';
import Flow from '../Flow';
import { defaultNodes, defaultEdges } from '../../models/InitialExample';
const startNodes = [{ id: 'node1', type: 'input', position: { x: 0, y: 0 }, data: { label: 'Node 1' } }];
const startEdges = [
  {
    id: 'edge1',
    source: 'node1',
    target: 'node2',
    markerEnd: { type: 'someMarkerType', width: 5, height: 5, color: 'black' },
    label: 'Edge Label',
    style: {},
  },
];

const DynamicFlow = () => {
  return (
    <div className="dnd-flow">
      <ReactFlowProvider>
        <Flow />;
        <Sidebar />
      </ReactFlowProvider>
    </div>
  );
};

export default DynamicFlow;
