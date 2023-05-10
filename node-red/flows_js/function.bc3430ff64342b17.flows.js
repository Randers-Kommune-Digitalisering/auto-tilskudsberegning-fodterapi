const Node = {
  "id": "bc3430ff64342b17",
  "type": "function",
  "z": "5bb3204aef17c104",
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
  "_order": 470
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg = flow.get("tempMsg");
  msg.payload = flow.get("tempPayload");
  return msg;
}

module.exports = Node;