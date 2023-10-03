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
  "_order": 893
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
  /*var acceptedReceipts = flow.get("currentRun").processedReceipts;
  if(!Array.isArray(acceptedReceipts)) acceptedReceipts = [acceptedReceipts];
  
  var allReceipts = msg.receipts;
  if (!Array.isArray(allReceipts)) allReceipts = [allReceipts];
  
  var remainingCount = allReceipts.length - acceptedReceipts.length;
  
  msg.isArchived = !(remainingCount > 0);*/
  
  var allReceiptsArchived = true;
  
  for (let i = 0; i < msg.payload.length; i++)
  {
      const receipt = msg.payload[i];
      if (!receipt.archived)
      {
          allReceiptsArchived = false;
          break;
      }
  }
  
  if (allReceiptsArchived)
      for (let i = 0; i < msg.errorList.length; i++)
      {
          const receipt = msg.errorList[i];
          if (!receipt.archived)
          {
              allReceiptsArchived = false;
              break;
          }
      }
  
  msg.isArchived = allReceiptsArchived;
  
  return msg;
}

module.exports = Node;