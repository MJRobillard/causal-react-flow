import NodeCategoryModel from '../models/NodeCategoryModel';
import Colors, { ColorName, ColorTone } from '../utils/Color';

export enum NodeCategoryType {
  Conditional = 'Conditional',
  Output = 'Output',
  Starting = 'Starting',
  Observation = 'Observation',
  NotObserved = 'NotObserved',
  Standard = 'Standard',
}

const NodeCategories: { [key in NodeCategoryType]: NodeCategoryModel } = {
  [NodeCategoryType.Conditional]: {
    name: 'Conditional',
    color: Colors.materail(ColorName.Blue, ColorTone.T100), // Toned down to T100
  },
  [NodeCategoryType.Output]: {
    name: 'Output',
    color: Colors.materail(ColorName.Yellow, ColorTone.T100), // Toned down to T100
  },
  [NodeCategoryType.Starting]: {
    name: 'Starting',
    color: Colors.materail(ColorName.Red, ColorTone.T100), // Toned down to T100
  },
  [NodeCategoryType.Observation]: {
    name: 'Observation',
    color: Colors.materail(ColorName.DeepPurple, ColorTone.T200), // Toned down to T100
  },
  [NodeCategoryType.NotObserved]: {
    name: 'NotObserved',
    color: Colors.materail(ColorName.Grey, ColorTone.T100), // Toned down to T100
  },
  [NodeCategoryType.Standard]: {
    name: 'Standard',
    color: Colors.materail(ColorName.Grey, ColorTone.T200), // Toned down to T100
  },
};

export default NodeCategories;
