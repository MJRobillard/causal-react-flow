import { NodeModel } from '../models/NodeModel';
import { NodeCategoryType } from './NodeCategories';

export enum NodeType {
  Conditional = 'Conditional',
  Observation = 'Observation',
  Output = 'Output',
  Starting = 'Starting',
  NotObserved = 'NotObserved',
}

const Nodes: { [key in NodeType]: NodeModel } = {
  [NodeType.Conditional]: {
    label: 'Conditional Node',
    category: NodeCategoryType.Conditional,
    key: NodeType.Conditional,
    apiCallData: 'h',

    // Add any additional properties specific to Conditional nodes
  },
  [NodeType.Observation]: {
    label: 'Observation Node',
    category: NodeCategoryType.Observation,
    key: NodeType.Observation,
    apiCallData: '',

    // Add any additional properties specific to Observation nodes
  },
  [NodeType.Output]: {
    label: 'Output Node',
    category: NodeCategoryType.Output,
    key: NodeType.Output,
    apiCallData: '',

    // Add any additional properties specific to Output nodes
  },
  [NodeType.Starting]: {
    label: 'Starting Node',
    category: NodeCategoryType.Starting,
    key: NodeType.Starting,
    apiCallData: '',

    // Add any additional properties specific to Starting nodes
  },
  [NodeType.NotObserved]: {
    label: 'Not Observed Node',
    category: NodeCategoryType.NotObserved,
    key: NodeType.NotObserved,
    apiCallData: '',
    // Add any additional properties specific to Starting nodes
  },
};

export default Nodes;
