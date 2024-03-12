import NodeCategoryModel from '../models/NodeCategoryModel';
import Colors, { ColorName, ColorTone } from '../utils/Color';

export enum NodeCategoryType {
  Conditional = 'conditional',
  Output = 'output',
  Starting = 'starting',
  Observation = 'observation',
}

const NodeCategories: { [key in NodeCategoryType]: NodeCategoryModel } = {
  [NodeCategoryType.Conditional]: {
    name: 'Conditional Node',
    color: Colors.materail(ColorName.Blue, ColorTone.T300),
  },
  [NodeCategoryType.Output]: {
    name: 'output',
    color: Colors.materail(ColorName.Yellow, ColorTone.T300),
  },
  [NodeCategoryType.Starting]: {
    name: 'starting',
    color: Colors.materail(ColorName.Pink, ColorTone.T300),
  },
  [NodeCategoryType.Observation]: {
    name: 'observation',
    color: Colors.materail(ColorName.Green, ColorTone.T300),
  },
};

export default NodeCategories;
