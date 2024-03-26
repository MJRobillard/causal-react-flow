import React from 'react';
import { Modal } from 'antd';
import { Edge } from 'react-flow-renderer'; // Import Edge type from react-flow-renderer

interface EdgeModalProps {
  visible: boolean;
  edge: Edge | null; // Define type for edge prop
  onClose: () => void;
}

const EdgeModal: React.FC<EdgeModalProps> = ({ visible, edge, onClose }) => {
  console.log(edge);
  return (
    <Modal title="Edge Information" visible={visible} onCancel={onClose} footer={null}>
      {edge && (
        <div>
          <p>Edge ID: {edge.id}</p>
          <p> Edge Source: {edge.source} </p>
          <p> Edge Target: {edge.target} </p>
          <p> Edge Type: {edge.type}</p>
          <p> Edge Type: {edge.label}</p>

          {/* Add other edge information */}
        </div>
      )}
    </Modal>
  );
};

export default EdgeModal;
