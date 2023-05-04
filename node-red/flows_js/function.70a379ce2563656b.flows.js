const Node = {
  "id": "70a379ce2563656b",
  "type": "function",
  "z": "8ea344595d9a442a",
  "name": "Calc %",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 1160,
  "y": 920,
  "wires": [
    [
      "30f14b6f815a98ef"
    ]
  ],
  "_order": 345
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  var percentage = msg.pupid / msg.totalCount * 100;
  percentage = parseInt(percentage);
  
  msg.percentage = percentage;
  return msg;
}

module.exports = Node;