const Node = {
  "id": "cd5218111a9658fb",
  "type": "function",
  "z": "c28a486ea3e09387",
  "name": "Get flow temp MSG object",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 1910,
  "y": 1060,
  "wires": [
    []
  ],
  "_order": 462
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg = flow.get("tempMsg");
  msg.payload = flow.get("tempPayload");
  return msg;
}

module.exports = Node;