import { Edge, MarkerType, StraightEdge } from 'react-flow-renderer';
import { getPercentageBlack } from './ColorUtils';
import { NodeModel } from './NodeModel';

// Example usage:
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

export const defaultEdges: Edge<any>[] = [
  {
    id: 'Season->Couds',
    source: 'Season',
    target: 'Couds',
    type: 'buttonedge',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: getPercentageBlack(25),
    },
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
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: getPercentageBlack(98.5),
    },
    style: {
      strokeWidth: 2,
      stroke: getPercentageBlack(98.5),
    },
  },
];
