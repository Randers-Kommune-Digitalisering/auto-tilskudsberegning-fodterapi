const Node = {
  "id": "5f4c45329970fab2",
  "type": "function",
  "z": "8ea344595d9a442a",
  "g": "bb5f1c24606d30f1",
  "name": "function 2",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 515,
  "y": 120,
  "wires": [
    [
      "1dce62fb28ae79dd"
    ]
  ],
  "l": false,
  "_order": 380
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  if(!Array.isArray(msg.runHistory))
      msg.runHistory = [msg.runHistory];
  
  var runHistory = msg.runHistory;
  
  runHistory[runHistory.length - 1].isFinalized = false;
  runHistory[runHistory.length - 1].allReceiptsProcessed = false;
  
  return msg;
}

module.exports = Node;