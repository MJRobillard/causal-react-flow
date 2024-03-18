import { ReactFlowProvider } from 'react-flow-renderer';
import 'reactflow/dist/style.css';
import './Main.scss';
import Sidebar from '../Sidebar';
import Flow from '../Flow';
import { NodeCounter } from '../../NodeCounter';
import { initialEdges, initialNodes } from '../../models/NodeModel';

const DynamicFlow = () => {
  return (
    <div className="dnd-flow">
      <ReactFlowProvider>
        <Flow />
        <Sidebar />
      </ReactFlowProvider>
    </div>
  );
};

export default DynamicFlow;
