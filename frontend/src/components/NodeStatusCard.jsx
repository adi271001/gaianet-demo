
import React from 'react';

const NodeStatusCard = ({ node }) => (
  <div className="bg-white p-4 rounded-xl shadow-md m-2">
    <h2 className="text-xl font-bold">Node: {node.address}</h2>
    <p>Last Updated: {new Date(node.lastUpdated * 1000).toLocaleString()}</p>
    <p>Model Version: {node.modelVersion}</p>
  </div>
);

export default NodeStatusCard;
