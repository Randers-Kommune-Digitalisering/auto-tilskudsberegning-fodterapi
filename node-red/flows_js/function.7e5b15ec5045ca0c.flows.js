const Node = {
  "id": "7e5b15ec5045ca0c",
  "type": "function",
  "z": "5bb3204aef17c104",
  "g": "8c06b11e392189b4",
  "name": "Set flow temp MSG object",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 570,
  "y": 1340,
  "wires": [
    [
      "fb46adcf35f27b62"
    ]
  ],
  "_order": 464
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  flow.set("tempMsg", msg);
  flow.set("tempPayload", msg.payload);
  return msg;
}

module.exports = Node;