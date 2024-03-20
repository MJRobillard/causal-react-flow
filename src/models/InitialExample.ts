import { Edge, MarkerType, StraightEdge } from 'react-flow-renderer';
import { getPercentageBlack } from './ColorUtils';
import { NodeModel } from './NodeModel';

// Example usage:

export const initialEdges: Edge<any>[] = [
  { source: 'Coudsoriginal', target: 'Rainoriginal', id: '{anything unique}+original' },
  {
    source: 'Rainoriginal',
    target: 'Coriginal',
    id: '{anything unique2}',
  },
];

export const initialNodes = [
  // Define your initial nodes here
  // Example:
  {
    id: 'Coudsoriginal',
    type: 'StartinWet Pavement',
    position: { x: 100, y: 100 },
    data: {
      label: 'Starting Node',
      category: 'StartinWet Pavement',
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
    id: 'Rainoriginal',
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

export const defaultNodes = [
  {
    id: 'Season',
    type: 'Starting',
    position: { x: 20, y: 0 },
    data: { label: 'Season' },
  },
  {
    id: 'Couds',
    type: 'Conditional',
    position: { x: 20, y: 150 },
    data: { label: 'Couds' },
  },
  {
    id: 'Rain',
    type: 'Conditional',
    position: { x: 100, y: 300 },
    data: { label: 'Rain' },
  },
  {
    id: 'Wet Pavement',
    type: 'Outcome',
    position: { x: 20, y: 450 },
    data: { label: 'Wet Pavement' },
  },
];

export const defaultEdges = [
  {
    id: 'Season->Couds',
    source: 'Season',
    target: 'Couds',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: getPercentageBlack(25),
    },
    label: 'r = 25%',
    style: {
      strokeWidth: 2,
      stroke: getPercentageBlack(25),
    },
  },
  {
    id: 'Couds->Rain',
    source: 'Couds',
    target: 'Rain',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: getPercentageBlack(50),
    },
    label: 'r = 50%',
    style: {
      strokeWidth: 2,
      stroke: getPercentageBlack(50),
    },
  },
  {
    id: 'Rain->Wet Pavement',
    source: 'Rain',
    target: 'Wet Pavement',
    markerEnd: {
      type: StraightEdge,
      width: 20,
      height: 20,
      color: getPercentageBlack(98.5),
    },
    label: 'r = 98.5%',
    style: {
      strokeWidth: 2,
      stroke: getPercentageBlack(98.5),
    },
  },
];
