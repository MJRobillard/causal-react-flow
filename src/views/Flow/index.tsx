import React, { useState, useRef, useCallback, useEffect } from 'react';
import ReactFlow, { addEdge, useNodesState, useEdgesState, Controls, Background, Node, Connection, Edge } from 'react-flow-renderer';
import { OnInit } from 'react-flow-renderer';
import 'reactflow/dist/style.css';
import './Flow.scss';
import { generateNodeId } from '../../utils/helper';
import NodeTypes from './NodeTypes';
import { NodeModel, initialEdges, initialNodes } from '../../models/NodeModel';
import Nodes, { NodeType } from '../../data/Nodes';
import { message, Select } from 'antd';

// variable to update the api of the graphs current state
//INITIAL STARTING NODES

const Flow = () => {
  const reactFlowWrapper = useRef<any>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);

  const onConnect = useCallback((params: Connection) => {
    console.log('Connecting nodes:', params.source, 'to', params.target);
    console.log(useState);
    console.log(reactFlowInstance);
    setEdges((eds) => {
      const newEdges = addEdge(params, eds);
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

  useEffect(() => {
    // Set initial nodes and edges when component mounts
    setNodes([...initialNodes]);
    setEdges([...initialEdges]);
  }, []);

  return (
    <div className="reactflow-wrapper" ref={reactFlowWrapper}>
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
      ></ReactFlow>
    </div>
  );
};

export default Flow;
