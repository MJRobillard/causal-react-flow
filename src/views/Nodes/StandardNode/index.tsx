import { Handle, Position } from 'react-flow-renderer';
import { Node } from 'reactflow';
import { NodeModel } from '../../../models/NodeModel';
import './StandardNode.scss';
import NodeCategories from '../../../data/NodeCategories';
import { Select } from 'antd';
const { Option } = Select;
const options = [
  { label: 'Starting', value: 'Starting' },
  { label: 'Output', value: 'Output' },
  { label: 'Conditional', value: 'Conditional' },
  { label: 'NotObserved', value: 'NotObserved' },
  { label: 'Observation', value: 'Observation' },
];

function StandardNode(props: Node<NodeModel>) {
  const category = NodeCategories[props.data.category];
  const compatibleIn: Record<string, boolean> = {
    Starting: false,
    Output: true,
    Conditional: true,
    NotObserved: false,
    Observation: true,
  };
  const compatibleOut: Record<string, boolean> = {
    Starting: true,
    Output: false,
    Conditional: true,
    NotObserved: true,
    Observation: true,
  };

  return (
    <div className="dnd-node standard-node">
      <Handle isConnectable={compatibleIn[props.data.key]} id={`${props.data.key}-input`} type="target" position={Position.Top} />

      <Select defaultValue={props.data.label}>
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>

      <Handle isConnectable={compatibleOut[props.data.key]} id={`${props.data.key}-output`} type="source" position={Position.Bottom} />
    </div>
  );
}

export default StandardNode;
