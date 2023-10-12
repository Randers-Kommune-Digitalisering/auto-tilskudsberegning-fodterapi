const Node = {
  "id": "73339e51d879eb37",
  "type": "function",
  "z": "1e8ab76213a40efe",
  "name": "Status",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 1610,
  "y": 240,
  "wires": [
    [
      "c8061fe9a0d65048"
    ]
  ],
  "_order": 543
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  node.status({
      fill:"green",
      shape:"dot",
      text:"Metrics skabt"
  });
  return msg;
}

module.exports = Node;