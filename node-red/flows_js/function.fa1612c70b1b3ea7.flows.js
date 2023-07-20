const Node = {
  "id": "fa1612c70b1b3ea7",
  "type": "function",
  "z": "8ea344595d9a442a",
  "g": "bb5f1c24606d30f1",
  "name": "function 3",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 715,
  "y": 3840,
  "wires": [
    [
      "c8ade2cefd45991f"
    ]
  ],
  "l": false,
  "_order": 637
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  if(!Array.isArray(msg.runHistory))
      msg.runHistory = [msg.runHistory];
  
  var runHistory = msg.runHistory;
  
  runHistory[runHistory.length - 1].isFinalized = true;
  runHistory[runHistory.length - 1].allReceiptsProcessed = true;
  
  return msg;
}

module.exports = Node;