import { NodeType } from '../../data/Nodes';
import StandardNode from '../Nodes/StandardNode';
import { NodeTypes } from 'react-flow-renderer';

const nodeTypes: NodeTypes = {
  [NodeType.Conditional]: StandardNode as any,
  [NodeType.Starting]: StandardNode as any,
  [NodeType.Observation]: StandardNode as any,
  [NodeType.Output]: StandardNode as any,
};

export default nodeTypes;
