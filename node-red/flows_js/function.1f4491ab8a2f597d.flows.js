const Node = {
  "id": "1f4491ab8a2f597d",
  "type": "function",
  "z": "f99fd88fa65c74b9",
  "g": "0644ae6c3d5c62e8",
  "name": "Check if all is archived",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 270,
  "y": 3520,
  "wires": [
    [
      "a4ac9ad0e5e23387"
    ]
  ],
  "_order": 905
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
  var acceptedReceipts = msg.currentRun.processedReceipts;
  if(!Array.isArray(acceptedReceipts)) acceptedReceipts = [acceptedReceipts];
  
  var allReceipts = msg.receipts;
  if (!Array.isArray(allReceipts)) allReceipts = [allReceipts];
  
  var remainingCount = allReceipts.length - acceptedReceipts.length;
  
  msg.isArchived = !(remainingCount > 0);
  return msg;
}

module.exports = Node;