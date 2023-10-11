const Node = {
  "id": "dfef270919197e96",
  "type": "function",
  "z": "43652557380ac3f3",
  "name": "Bevilling?",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 1000,
  "y": 2340,
  "wires": [
    [
      "66afcd1514727417"
    ]
  ],
  "_order": 322
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  if (msg.payload.tempData == undefined || msg.payload.tempData == null ||  msg.payload.tempData.persondata == null)
      return msg;
  
  return msg;
}

module.exports = Node;