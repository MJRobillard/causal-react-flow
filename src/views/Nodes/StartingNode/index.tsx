import { Handle, Position } from 'react-flow-renderer';
import { Node } from 'reactflow';
import { NodeModel } from '../../../models/NodeModel';
import './StartingNode.scss';
import NodeCategories from '../../../data/NodeCategories';

function StartingNode(props: Node<NodeModel>) {
  const category = NodeCategories[props.data.category];
  return (
    <div className="dnd-node starting-node">
      <Handle isConnectable id={`${props.data.key}-input`} type="target" position={Position.Top} />
      <div className="starting-node-body">
        <div style={{ background: category.color }} className="node-category-color" />
        <span>{props.data.label}</span>
      </div>
      <Handle isConnectable id={`${props.data.key}-output`} type="source" position={Position.Bottom} />
    </div>
  );
}

export default StartingNode;
