import { NodeType } from './../data/Nodes';
import { NodeCategoryType } from '../data/NodeCategories';

export interface NodeModel {
  label: string;
  category: string;
  key: NodeType;
  apiCallData: string;
}
// Example usage:
