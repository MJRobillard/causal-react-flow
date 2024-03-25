import { Handle, Position, useNodesState } from 'react-flow-renderer';
import { Node, NodeToolbar } from 'reactflow';
import { NodeModel } from '../../../models/NodeModel';
import './StandardNode.scss';
import NodeCategories, { NodeCategoryType } from '../../../data/NodeCategories'; // Import NodeCategoryType enum
import { memo, useState } from 'react';
import { Modal, Button, Input } from 'antd'; // Import Input from antd
import NodeCategoryModel from '../../../models/NodeCategoryModel';
import NodeTypeToColorMap from '../../Flow/UtilColorMap';
import ResponsiveXYFrame from './semTest';

function StandardNode(props: Node<NodeModel>) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newLabel, setNewLabel] = useState(props.data.label); // State to track the new label

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleCategoryChange = (newCategory: string) => {
    console.log(`Changing category to: ${newCategory}`);
    props.data.category = newCategory;
    setIsModalVisible(false);
  };

  const handleLabelChange = () => {
    console.log(`Changing label to: ${newLabel}`);
    if (props.selected == true) {
      console.log(props.id, props.data.label);
      props.data.label = newLabel;
      console.log(props.id);
      console.log(props.id);
      setIsModalVisible(false);
    }
  };

  return (
    <div className="dnd-node" style={{ backgroundColor: NodeTypeToColorMap[props.data.category], borderRadius: '100%' }}>
      <Handle type="target" position={Position.Top} />
      <div className="standard-node-body">
        <span>{props.data.label}</span>
        <div style={{ marginBottom: '10px' }}>
          <Button type="primary" onClick={showModal}>
            Open
          </Button>
        </div>
        <Modal title={props.data.label + ' Configuration'} visible={isModalVisible} onCancel={handleCancel}>
          <Input value={newLabel} onChange={(e) => setNewLabel(e.target.value)} /> {/* Input field for new label */}
          <br />
          <div style={{ marginBottom: '10px' }}>
            {' '}
            {/* Add margin to separate the buttons */}
            <Button type="primary" onClick={handleLabelChange}>
              Change Label
            </Button>{' '}
            {/* Button to change label */}
          </div>
          {/* Iterate through all available categories */}
          {Object.values(NodeCategories).map((category: NodeCategoryModel, index: number) => (
            <Button key={index} type="ghost" onClick={() => handleCategoryChange(category.name)}>
              {category.name}
            </Button>
          ))}
          {/* Display all other props */}
          {Object.entries(props.data).map(([key, value]) => (
            <div key={key}>
              <strong>{key}:</strong> {value}
            </div>
          ))}
          <ResponsiveXYFrame></ResponsiveXYFrame>
        </Modal>
      </div>
      <Handle id={`${props.data.key}-output`} type="source" position={Position.Bottom} />
    </div>
  );
}

export default memo(StandardNode);
