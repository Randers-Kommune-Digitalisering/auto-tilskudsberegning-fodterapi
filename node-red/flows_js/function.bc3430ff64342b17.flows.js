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
  "x": 2090,
  "y": 1440,
  "wires": [
    []
  ],
  "_order": 798
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg = flow.get("tempMsg");
  msg.payload = flow.get("tempPayload");
  return msg;
}

module.exports = Node;