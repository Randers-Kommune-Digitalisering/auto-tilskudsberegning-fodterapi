const Node = {
  "id": "d6432bd8a487caa0",
  "type": "function",
  "z": "c28a486ea3e09387",
  "d": true,
  "g": "e4e7a254403521e9",
  "name": "Next receipt id?",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 1280,
  "y": 1200,
  "wires": [
    [
      "948eb590f69bd85b"
    ]
  ],
  "_order": 445
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg.payload.tempDataLength = msg.tempDataArray.length;
  
  msg.payload.spec = parseInt(msg.payload.id) >= (msg.tempDataArray.length - 1) ? parseInt(msg.payload.id) : (parseInt(msg.payload.id)+1);
  
  return msg;
}

module.exports = Node;