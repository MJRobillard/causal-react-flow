import { ReactFlowProvider } from 'react-flow-renderer';
import 'reactflow/dist/style.css';
import './Main.scss';
import Sidebar from '../Sidebar';
import Flow from '../Flow';

const DynamicFlow = () => {
  return (
    <div className="dnd-flow">
      <ReactFlowProvider>
        <Flow />
      </ReactFlowProvider>

      <Sidebar />
    </div>
  );
};

export default DynamicFlow;
