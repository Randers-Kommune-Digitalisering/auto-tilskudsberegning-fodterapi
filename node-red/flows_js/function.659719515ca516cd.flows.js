const Node = {
  "id": "659719515ca516cd",
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
  "y": 320,
  "wires": [
    []
  ],
  "_order": 487
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  node.status({});
  return msg;
}

module.exports = Node;