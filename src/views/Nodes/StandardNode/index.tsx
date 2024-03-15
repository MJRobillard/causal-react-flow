import { Handle, Position } from 'react-flow-renderer';
import { Node } from 'reactflow';
import { NodeModel } from '../../../models/NodeModel';
import './StandardNode.scss';
import NodeCategories from '../../../data/NodeCategories';
import { Select } from 'antd'; // Update the path to the Select component
const { Option } = Select;
const options = [
  { label: 'Starting', value: 'Starting' },
  { label: 'Output', value: 'Output' },
  { label: 'Conditional', value: 'Conditional' },
  { label: 'notObserved', value: 'notObserved' },
  { label: 'Observation', value: 'Observation' },
];



function StandardNode(props: Node<NodeModel>) {
  const category = NodeCategories[props.data.category];
  const compatibleIn: Record<string, boolean> = {
    starting: false,
    output: true,
    conditional: true,
    notObserved: false,
    observation: true,
  };
  const compatibleOut: Record<string, boolean> = {
    starting: true,
    output: false,
    conditional: true,
    notObserved: true,
    observation: true,
  };

  return (
    <div className="dnd-node standard-node">
      <Handle isConnectable={compatibleIn[props.data.key]} id={`${props.data.key}-input`} type="target" position={Position.Top} />

      <Select defaultValue="option1">
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
        <div className="standard-node-body">
          <div style={{ background: category.color }} className="node-category-color" />
          <span>{props.data.label}</span>
        </div>
      </Select>
      <Handle isConnectable={compatibleOut[props.data.key]} id={`${props.data.key}-output`} type="source" position={Position.Bottom} />
    </div>
  );
}

export default StandardNode;
