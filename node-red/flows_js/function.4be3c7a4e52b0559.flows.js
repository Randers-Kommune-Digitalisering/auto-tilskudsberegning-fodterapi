const Node = {
  "id": "4be3c7a4e52b0559",
  "type": "function",
  "z": "fd98a6615193936d",
  "name": "Konverter til obj",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 560,
  "y": 1040,
  "wires": [
    [
      "13fd6673e6b6091c"
    ]
  ],
  "_order": 307
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg.payload = JSON.parse(JSON.stringify(msg.payload[0]));
  return msg;
}

module.exports = Node;