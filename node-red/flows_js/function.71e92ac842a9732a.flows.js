const Node = {
  "id": "71e92ac842a9732a",
  "type": "function",
  "z": "5bb3204aef17c104",
  "g": "8c06b11e392189b4",
  "name": "Get flow temp MSG object",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 1230,
  "y": 1340,
  "wires": [
    [
      "df181b0f909372fc",
      "5029c037aace2311"
    ]
  ],
  "_order": 524
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg = flow.get("tempMsg");
  msg.payload = flow.get("tempPayload");
  return msg;
}

module.exports = Node;