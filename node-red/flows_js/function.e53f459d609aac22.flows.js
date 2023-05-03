const Node = {
  "id": "e53f459d609aac22",
  "type": "function",
  "z": "c28a486ea3e09387",
  "g": "0e177132df886f4e",
  "name": "Set flow temp MSG object",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 710,
  "y": 1060,
  "wires": [
    [
      "30b5b930fae41995"
    ]
  ],
  "_order": 450
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  flow.set("tempMsg", msg);
  flow.set("tempPayload", msg.payload);
  return msg;
}

module.exports = Node;