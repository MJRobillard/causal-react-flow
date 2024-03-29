import React, { useState, useRef, useCallback, useEffect } from 'react';
import ReactFlow, { addEdge, useNodesState, useEdgesState, Node, Connection, useReactFlow, MarkerType, Edge } from 'react-flow-renderer';
import { OnInit } from 'react-flow-renderer';
import 'reactflow/dist/style.css';
import './Flow.scss';
import { generateNodeId } from '../../utils/helper';
import NodeTypes from './NodeTypes';
import { NodeModel } from '../../models/NodeModel';
import Nodes, { NodeType } from '../../data/Nodes';
import { message } from 'antd';
import { useEdges } from 'reactflow';
import EdgeModal from './edgeModal';

// variable to update the api of the graphs current state
function Flow() {
  const reactFlowWrapper = useRef<any>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [nodeName, setNodeName] = useState('Conditional');
  const [ReactFlowJson] = useState([]);
  const { setViewport } = useReactFlow();
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);
  const [isEdgeModalVisible, setIsEdgeModalVisible] = useState(false);
  const [selectedEdge, setSelectedEdge] = useState<Edge | null>(null);

  const onSave = useCallback(() => {
    const flowData = {
      nodes: nodes,
      edges: edges,
      viewport: reactFlowInstance?.toObject().viewport,
    };
    localStorage.setItem('reactFlowData', JSON.stringify(flowData));
  }, [nodes, edges, reactFlowInstance]);

  const onRestore = useCallback(() => {
    const flowData = localStorage.getItem('reactFlowData');
    if (flowData) {
      const parsedFlowData = JSON.parse(flowData);
      console.log('onRestoreData', parsedFlowData);

      setNodes(parsedFlowData.nodes);
      setEdges(parsedFlowData.edges);
      setViewport(parsedFlowData.viewport);
    } else {
      message.warning('No saved flow data found!');
    }
  }, [setNodes, setEdges, setViewport]);
  const reset = useCallback(() => {
    setNodes([]);
    setEdges([]);
  }, [setNodes, setEdges, setViewport]);
  const remakeFlow = useCallback(
    (data: string) => {
      if (data) {
        const parsedFlowData = JSON.parse(data);
        console.log(parsedFlowData, 'parsedFlowData');

        setNodes(parsedFlowData.nodes);
        setEdges(parsedFlowData.edges);
        setViewport(parsedFlowData.viewport);
      } else {
        message.warning('No saved flow data found!');
      }
    },
    [setNodes, setEdges, setViewport],
  );
  const exportData = () => {
    onSave();
    const flowData = localStorage.getItem('reactFlowData');
    if (flowData) {
      const fileName = window.prompt('Enter file name:', 'data.json');
      if (fileName) {
        const jsonData = JSON.parse(flowData); // Parse the JSON data
        const jsonString = JSON.stringify(jsonData); // Convert the parsed data back to a JSON string
        const blob = new Blob([jsonString], { type: 'application/json' }); // Create a Blob object
        const url = URL.createObjectURL(blob); // Create a URL for the Blob
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName.endsWith('.json') ? fileName : `${fileName}.json`; // Ensure the file name has a .json extension
        link.click();
        URL.revokeObjectURL(url); // Clean up the URL object to free up memory
      }
    }
  };

  console.log(ReactFlowJson);

  const onConnect = useCallback((params: Connection) => {
    console.log('Connecting nodes:', params.source, 'to', params.target);
    console.log(useState);
    console.log(reactFlowInstance);
    setEdges((eds) => {
      const newEdgeParams = {
        ...params,
        type: 'straight', // Using a straight arrow instead of the curve default
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 50,
          height: 50,
        },
      };
      const newEdges = addEdge(newEdgeParams, eds);
      console.log('pay', params, eds);
      // Log the updated edges
      console.log('Updated edges:', newEdges);
      // Return the newEdges for updating the state
      return newEdges;
    });
  }, []);

  const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper?.current?.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow') as NodeType;

      if (typeof type === 'undefined' || !type) {
        message.warning('Node type not found!');
        return;
      }

      const nodeData = Nodes[type];
      const position = reactFlowInstance?.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      const newNode: Node<NodeModel> = {
        id: generateNodeId(),
        type,
        position,
        data: nodeData,
      };
      console.log(newNode.data);

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance],
  );
  const handleFileChange = (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        const flowData = event.target.result as string;
        remakeFlow(flowData);
      } else {
        message.warning('Error reading file.');
      }
    };
    reader.readAsText(files[0]);
  };
  const handleEdgeClick = (event: React.MouseEvent, edge: Edge) => {
    setSelectedEdge(edge);
    console.log(selectedEdge);
    setIsEdgeModalVisible(true); // Show modal

    // Handle edge click event here
  };
  useEffect(() => {
    console.log(selectedEdge); // This will log the updated value of selectedEdge
    if (selectedEdge) {
      setIsEdgeModalVisible(true); // Show modal
    }
  }, [selectedEdge]);
  return (
    <div className="reactflow-wrapper" ref={reactFlowWrapper}>
      <button onClick={reset}>Reset</button>
      <button onClick={onSave}>Save</button>
      <button onClick={onRestore}>Restore</button>
      <button onClick={exportData}>Download</button>
      <input id="fileInput" type="file" accept=".json" onChange={(e) => handleFileChange(e.target.files)} />
      <input value={nodeName} onChange={(evt) => setNodeName(evt.target.value)} />
      <EdgeModal visible={isEdgeModalVisible} edge={selectedEdge} onClose={() => setIsEdgeModalVisible(false)}></EdgeModal>
      <ReactFlow
        nodeTypes={NodeTypes}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={setReactFlowInstance as OnInit<any, any>}
        onDrop={onDrop}
        onDragOver={onDragOver}
        fitView
        onEdgeDoubleClick={handleEdgeClick}
      ></ReactFlow>
    </div>
  );
}

export default Flow;
