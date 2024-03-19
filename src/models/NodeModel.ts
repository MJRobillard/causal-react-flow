import { NodeType } from './../data/Nodes';
import { NodeCategoryType } from '../data/NodeCategories';
import { Edge, MarkerType, StraightEdge } from 'react-flow-renderer';

export interface NodeModel {
  label: string;
  category: NodeCategoryType;
  key: NodeType;
}

export const initialEdges: Edge<any>[] = [
  { source: 'Coudsoriginal', target: 'Rainoriginal', id: '{anything unique}+original' },
  {
    source: 'Rainoriginal',
    target: 'Coriginal',
    id: '{anything unique2}',
  },
];

function getPercentageBlack(percentage: number): string {
  // Ensure percentage is within the range of 0 to 100
  percentage = Math.min(100, Math.max(0, percentage));

  // Calculate the RGB values based on the percentage
  const blackness = (100 - percentage) / 100;
  const r = Math.round(255 * blackness);
  const g = Math.round(255 * blackness);
  const b = Math.round(255 * blackness);

  // Convert RGB values to hexadecimal representation
  const hex = ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');

  // Return the color in hexadecimal format
  return `#${hex}`;
}

// Example usage:

function getColorAtPercentage(percentage: number) {
  // Ensure percentage is within 0 to 100 range
  percentage = Math.max(0, Math.min(100, percentage));

  // Convert percentage to a value between 0 and 1
  const normalizedPercentage = percentage / 100;

  // Calculate the hue value between 240 (blue) and 0 (red)
  const hue = (1 - normalizedPercentage) * 240;

  // Convert HSL to RGB
  const hslToRgb = (h: number, s: number, l: number) => {
    let r, g, b;

    if (s === 0) {
      r = g = b = l; // Achromatic
    } else {
      const hueToRgb = (p: number, q: number, t: number) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hueToRgb(p, q, h + 1 / 3);
      g = hueToRgb(p, q, h);
      b = hueToRgb(p, q, h - 1 / 3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  };

  const [r, g, b] = hslToRgb(hue / 360, 1, 0.5); // Set saturation and lightness to 100% and 50% respectively

  // Convert RGB to hexadecimal color code
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// Example usage:

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
