const Node = {
  "id": "70a379ce2563656b",
  "type": "function",
  "z": "8ea344595d9a442a",
  "g": "c6e3f804080c4f10",
  "name": "Calc %",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 1480,
  "y": 1500,
  "wires": [
    [
      "13b4cf2351a4903e"
    ]
  ],
  "_order": 602
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  var percentage = msg.pupid / msg.totalCount * 100;
  percentage = parseInt(percentage);
  
  msg.percentage = percentage;
  return msg;
}

module.exports = Node;