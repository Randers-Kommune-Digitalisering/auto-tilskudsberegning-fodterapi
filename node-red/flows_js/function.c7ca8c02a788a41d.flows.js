const Node = {
  "id": "c7ca8c02a788a41d",
  "type": "function",
  "z": "8ea344595d9a442a",
  "g": "380e5c7e0ea3778b",
  "name": "Check if all is archived",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 390,
  "y": 2800,
  "wires": [
    [
      "8f4d2dcc4c986825"
    ]
  ],
  "_order": 366
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