const Node = {
  "id": "b32a26dc349f5b07",
  "type": "function",
  "z": "43652557380ac3f3",
  "name": "Find first un-archived receipt",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 1720,
  "y": 120,
  "wires": [
    [
      "7a64b3858edfdad8"
    ]
  ],
  "_order": 221
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  var receiptCount = 0;
  
  if (msg.payload.tempDataArray !== undefined)
      receiptCount = msg.payload.tempDataArray.length;
  
  var anyReceiptsArchived = false;
  
  for (var i = 0; i < receiptCount; i++)
      if (!msg.payload.tempDataArray[i].archived)
      {
          msg.payload.spec = i;
          break;
      }
      else
          anyReceiptsArchived = true;
  
  if (anyReceiptsArchived && msg.payload.spec == 0)
      msg.payload.spec = (receiptCount-1);
  
  return msg;
}

module.exports = Node;