# GaiaNet Web3 AI Mesh Demo

This project demonstrates integrating a decentralized GaiaNet AI training system with a Web3 dashboard.

Address: 0xd9145CCE52D386f254917e481eB44e9943F39138


# 🌍 GaiaNet Node | Web3 Demo 🚀  
> Run your own GaiaNode and register it on the GaiaNet decentralized network — powered by smart contracts, Ethers.js, and a React + FastAPI dApp stack.

## ✨ Overview  
This project demonstrates how to:  
- ✅ Deploy a `GaiaNodeRegistry` smart contract  
- ✅ Register your node with metadata  
- ✅ Connect a React frontend with Ethers.js  
- ✅ Simulate node heartbeats and interact with the chain  
> 🔗 Empowering decentralized AI and compute through GaiaNet.

## ⚙️ Architecture  
Frontend (React + Ethers.js) → Smart Contract (Solidity - GaiaNodeRegistry) → Backend Node (FastAPI - Node Agent) → Blockchain (Testnet or Localchain)

## 🚀 Quick Start  

### 1. Clone the Repository  
```bash  
git clone https://github.com/yourname/gaianet-node-demo.git  
cd gaianet-node-demo  
```

### 2. Install Dependencies  

#### Frontend  
```bash  
cd frontend  
npm install  
```

#### Backend Node Agent  
```bash  
cd backend  
pip install -r requirements.txt  
```

## 🔐 Setup Configuration  

### 1. Create `.env` files  

#### Frontend `.env`  
```env  
REACT_APP_CONTRACT_ADDRESS=0xYourDeployedAddress  
REACT_APP_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY  
REACT_APP_CHAIN_ID=11155111  
```

#### Backend `.env`  
```env  
PRIVATE_KEY=your_node_wallet_private_key  
RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY  
CONTRACT_ADDRESS=0xYourDeployedAddress  
```

## 💡 Features  
- 🧠 Node Registration with Metadata  
- 📡 Node Status Monitor  
- 🔐 Smart Contract Interaction  
- 🖼 Dynamic UI with Node Info Cards  
- 🔁 Simulated Node Heartbeat Calls (backend)  
- 🧩 Easily pluggable with other GaiaNet modules  

## 🏗 Contract Details  
### ✅ `GaiaNodeRegistry.sol`  
- `registerNode(string metadataURI, address nodeAddress)`  
- `updateNode(string newMetadataURI)`  
- `getNode(address nodeAddress) → string`

## 📤 Deployment Guide  

### Option 1: Remix IDE  
- Paste `GaiaNodeRegistry.sol`  
- Compile  
- Deploy using `Remix VM` or connect to `Injected Wallet (MetaMask)`  
- Copy deployed contract address  


## 🖼 Frontend Preview  
_(Add screenshot if available)_  
`/assets/demo-ui.png`

## 📡 Simulate GaiaNode Heartbeat (Backend)  

Start backend node agent:  
```bash  
cd backend  
python node_agent.py  
```

This will:  
- Ping the chain  
- Log simulated node uptime  
- Optionally update metadata if you integrate off-chain node metrics

## 🛠 Tools & Tech Stack  
- Solidity + Remix  
- Ethers.js  
- React.js + Tailwind CSS  
- FastAPI (Node heartbeat)  
- IPFS / Web3.Storage for metadata URIs (optional)

## 🤝 Contribute to GaiaNet  
This is a demo to showcase how nodes join GaiaNet.  
PRs welcome to:  
- Enhance metadata schema  
- Add real node monitoring  
- Expand frontend UX  
- Integrate IPFS / decentralized storage

## 📬 Contact / Support  
Need help? Ping the GaiaNet DevRel Team or open an issue.
