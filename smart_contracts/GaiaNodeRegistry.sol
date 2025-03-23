
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract GaiaNodeRegistry {
    struct Node {
        address owner;
        string ipfsMetadata;
        uint256 lastUpdated;
    }

    mapping(address => Node) public nodes;

    function registerNode(string memory ipfsMetadata) external {
        nodes[msg.sender] = Node(msg.sender, ipfsMetadata, block.timestamp);
    }

    function updateNode(string memory ipfsMetadata) external {
        require(nodes[msg.sender].owner == msg.sender, "Not your node");
        nodes[msg.sender].ipfsMetadata = ipfsMetadata;
        nodes[msg.sender].lastUpdated = block.timestamp;
    }

    function getNode(address nodeAddr) external view returns (Node memory) {
        return nodes[nodeAddr];
    }
}
