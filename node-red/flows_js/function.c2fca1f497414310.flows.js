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
  "x": 1100,
  "y": 1860,
  "wires": [
    [
      "7c147817ac211cb5",
      "44148ccf8b44ec67"
    ]
  ],
  "_order": 709
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg.payload = JSON.parse(JSON.stringify(msg.payload));
  return msg;
}

module.exports = Node;