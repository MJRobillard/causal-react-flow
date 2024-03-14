import { NodeType } from './../data/Nodes';
import { NodeCategoryType } from '../data/NodeCategories';
import { Edge } from 'react-flow-renderer';
export interface NodeModel {
  label: string;
  category: NodeCategoryType;
  key: NodeType;
}
export const initialEdges: Edge<any>[] = [
  { source: 'A', target: 'B', id: '{anything unique}' },
  {
    source: 'B',
    target: 'C',
    id: '{anything unique2}',
  },
];

export const initialNodes = [
  // Define your initial nodes here
  // Example:
  {
    id: 'A',
    type: 'starting',
    position: { x: 100, y: 100 },
    data: {
      label: 'Starting Node',
      category: 'starting',
    },
  },
  {
    id: 'B',
    type: 'output',
    color: 'red',
    position: { x: 200, y: 200 },
    data: {
      label: 'Output Node',
      category: 'output',
    },
  },
  {
    id: 'C',
    type: 'conditional',
    position: { x: 300, y: 300 },
    data: {
      label: 'Conditional Node',
      category: 'conditional',
    },
  },
  {
    id: 'D',
    type: 'observation',
    position: { x: 350, y: 100 },
    data: {
      label: 'Observation Node',
      category: 'observation',
    },
  },
  {
    id: 'E',
    type: 'notObserved',
    position: { x: 350, y: 300 },
    data: {
      label: 'NotObserved',
      category: 'notObserved',
    },
  },
];
