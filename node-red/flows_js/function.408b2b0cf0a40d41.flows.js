const Node = {
  "id": "408b2b0cf0a40d41",
  "type": "function",
  "z": "c28a486ea3e09387",
  "g": "0e177132df886f4e",
  "name": "Get flow temp MSG object",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 1370,
  "y": 1060,
  "wires": [
    [
      "164122de385f07b8",
      "ea3be6d83c70d734"
    ]
  ],
  "_order": 451
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg = flow.get("tempMsg");
  msg.payload = flow.get("tempPayload");
  return msg;
}

module.exports = Node;