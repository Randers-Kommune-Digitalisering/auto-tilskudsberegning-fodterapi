const Node = {
  "id": "b2157274bde1ce9d",
  "type": "function",
  "z": "5bb3204aef17c104",
  "d": true,
  "g": "63492761a85db852",
  "name": "Next receipt id?",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 1140,
  "y": 1480,
  "wires": [
    [
      "3bd0ac4edb7c8181"
    ]
  ],
  "_order": 479
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg.payload.tempDataLength = msg.tempDataArray.length;
  
  msg.payload.spec = parseInt(msg.payload.id) >= (msg.tempDataArray.length - 1) ? parseInt(msg.payload.id) : (parseInt(msg.payload.id)+1);
  
  return msg;
}

module.exports = Node;