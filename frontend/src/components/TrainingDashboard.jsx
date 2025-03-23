
import React from 'react';
import NodeStatusCard from './NodeStatusCard';

const TrainingDashboard = ({ nodes }) => (
  <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {nodes.map((node, idx) => <NodeStatusCard key={idx} node={node} />)}
  </div>
);

export default TrainingDashboard;
