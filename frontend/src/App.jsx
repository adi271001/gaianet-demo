
import React, { useEffect, useState } from 'react';
import TrainingDashboard from './components/TrainingDashboard';
import { ethers } from 'ethers';
import contractABI from './web3/contractABI.json';

const CONTRACT_ADDRESS = '0xYourContractAddressHere';

function App() {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    const fetchNodes = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(CONTRACT_ADDRESS, contractABI, provider);
      const accounts = await provider.send("eth_requestAccounts", []);
      const node = await contract.getNode(accounts[0]);
      setNodes([node]);
    };
    fetchNodes();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">GaiaNet Web3 AI Mesh</h1>
      <TrainingDashboard nodes={nodes} />
    </div>
  );
}

export default App;
