const Node = {
  "id": "1184056262f02591",
  "type": "function",
  "z": "43652557380ac3f3",
  "name": "set temp data obj",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 2010,
  "y": 2140,
  "wires": [
    [
      "d4601eb0c82d44dc"
    ]
  ],
  "_order": 307
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  /*
  if (!Array.isArray(msg.payload.tempDataArray))
  {
      msg.payload.tempData = msg.payload.tempDataArray;
      msg.payload.tempDataArray = [msg.payload.tempDataArray];
  }
  else*/
      msg.payload.tempData = msg.payload.tempDataArray[msg.payload.spec];
  return msg;
}

module.exports = Node;