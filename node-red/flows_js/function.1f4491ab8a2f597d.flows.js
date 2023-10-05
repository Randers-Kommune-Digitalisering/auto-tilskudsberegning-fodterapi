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
  "y": 3660,
  "wires": [
    [
      "a4ac9ad0e5e23387"
    ]
  ],
  "_order": 924
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
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