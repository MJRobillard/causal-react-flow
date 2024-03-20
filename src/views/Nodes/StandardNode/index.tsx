import { Handle, Position } from 'react-flow-renderer';
import { Node, NodeToolbar } from 'reactflow';
import { NodeModel } from '../../../models/NodeModel';
import './StandardNode.scss';
import NodeCategories from '../../../data/NodeCategories';
import { memo } from 'react';

function StandardNode(props: Node<NodeModel>) {
  const category = NodeCategories[props.data.category];

  return (
    <div className="dnd-node standard-node">
      <Handle type="target" position={Position.Top} />
      <div className="standard-node-body" style={{ background: category.color }}>
        <span>{props.data.label}</span>
      </div>
      <Handle id={`${props.data.key}-output`} type="source" position={Position.Bottom} />
    </div>
  );
}

export default memo(StandardNode);
