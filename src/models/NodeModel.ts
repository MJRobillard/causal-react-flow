import { NodeType } from './../data/Nodes';
import { NodeCategoryType } from '../data/NodeCategories';
import { Edge } from 'react-flow-renderer';
export interface NodeModel {
  label: string;
  category: NodeCategoryType;
  key: NodeType;
}

export const initialEdges: Edge<any>[] = [
  { source: 'Aoriginal', target: 'Boriginal', id: '{anything unique}+original' },
  {
    source: 'Boriginal',
    target: 'Coriginal',
    id: '{anything unique2}',
  },
];

export const initialNodes = [
  // Define your initial nodes here
  // Example:
  {
    id: 'Aoriginal',
    type: 'Starting',
    position: { x: 100, y: 100 },
    data: {
      label: 'Starting Node',
      category: 'Starting',
    },
  },
  {
    id: 'Coriginal',
    type: 'Output',
    color: 'red',
    position: { x: 300, y: 400 },
    data: {
      label: 'Output Node',
      category: 'Output',
    },
  },
  {
    id: 'Boriginal',
    type: 'Conditional',
    position: { x: 200, y: 300 },
    data: {
      label: 'Conditional Node',
      category: 'Conditional',
    },
  },
  {
    id: 'Doriginal',
    type: 'Observation',
    position: { x: 350, y: 100 },
    data: {
      label: 'Observation Node',
      category: 'Observation',
    },
  },
  {
    id: 'Eoriginal',
    type: 'NotObserved',
    position: { x: 350, y: 300 },
    data: {
      label: 'NotObserved',
      category: 'NotObserved',
    },
  },
];
