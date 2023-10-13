const Node = {
  "id": "888604579d85d4b5",
  "type": "function",
  "z": "1e8ab76213a40efe",
  "name": "Status",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 290,
  "y": 120,
  "wires": [
    []
  ],
  "_order": 559
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  node.status({
      fill:"yellow",
      shape:"ring",
      text:"Skaber metrics ..."
  });
  return msg;
}

module.exports = Node;