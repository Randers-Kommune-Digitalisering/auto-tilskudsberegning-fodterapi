const Node = {
  "id": "b886d6f8bb04bc16",
  "type": "function",
  "z": "f99fd88fa65c74b9",
  "g": "ee6f8b38b1f3ef2e",
  "name": "Calc %",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 1100,
  "y": 1600,
  "wires": [
    [
      "51919c582b01441a"
    ]
  ],
  "_order": 565
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  var percentage = msg.pupid / msg.totalCount * 100;
  percentage = parseInt(percentage);
  
  msg.percentage = percentage;
  return msg;
}

module.exports = Node;