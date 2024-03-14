import { Handle, Position } from 'react-flow-renderer';
import { Node } from 'reactflow';
import { NodeModel } from '../../../models/NodeModel';
import './StandardNode.scss';
import NodeCategories from '../../../data/NodeCategories';
import { Select } from 'antd'; // Update the path to the Select component
const { Option } = Select;
const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
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
      <Select defaultValue="option1">
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
      <Handle isConnectable={compatibleIn[props.data.key]} id={`${props.data.key}-input`} type="target" position={Position.Top} />

      <div className="standard-node-body">
        <div style={{ background: category.color }} className="node-category-color" />
        <span>{props.data.label}</span>
      </div>
      <Handle isConnectable={compatibleOut[props.data.key]} id={`${props.data.key}-output`} type="source" position={Position.Bottom} />
    </div>
  );
}

export default StandardNode;
