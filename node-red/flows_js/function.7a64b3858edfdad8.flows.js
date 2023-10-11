const Node = {
  "id": "7a64b3858edfdad8",
  "type": "function",
  "z": "43652557380ac3f3",
  "name": "set tempDataLength",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 1760,
  "y": 2100,
  "wires": [
    [
      "1184056262f02591"
    ]
  ],
  "_order": 315
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  if (!Array.isArray(msg.payload.tempDataArray))
  {
      msg.payload.tempDataArray = [msg.payload.tempDataArray];
  }
  
  msg.payload.tempDataLength = msg.payload.tempDataArray.length;
  
  return msg;
}

module.exports = Node;