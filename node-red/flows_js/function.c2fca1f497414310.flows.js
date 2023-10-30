const Node = {
  "id": "c2fca1f497414310",
  "type": "function",
  "z": "5bb3204aef17c104",
  "name": "Konverter til obj",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 660,
  "y": 2080,
  "wires": [
    [
      "c8559862e82a0e16"
    ]
  ],
  "_order": 715
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg.payload = JSON.parse(JSON.stringify(msg.payload));
  return msg;
}

module.exports = Node;