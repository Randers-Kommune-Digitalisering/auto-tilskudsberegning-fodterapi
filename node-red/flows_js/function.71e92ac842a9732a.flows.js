const Node = {
  "id": "71e92ac842a9732a",
  "type": "function",
  "z": "5bb3204aef17c104",
  "g": "8c06b11e392189b4",
  "name": "Get temp MSG object",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 1440,
  "y": 1300,
  "wires": [
    [
      "df181b0f909372fc",
      "e5908679bccd13f4"
    ]
  ],
  "_order": 799
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg = flow.get("tempMsg");
  msg.payload = flow.get("tempPayload");
  return msg;
}

module.exports = Node;