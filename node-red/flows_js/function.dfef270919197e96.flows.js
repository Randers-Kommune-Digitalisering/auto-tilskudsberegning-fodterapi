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
  "x": 1240,
  "y": 320,
  "wires": [
    [
      "66afcd1514727417"
    ]
  ],
  "_order": 319
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  if (msg.payload.tempData == undefined || msg.payload.tempData == null ||  msg.payload.tempData.persondata == null)
      return msg;
  
  msg.payload.tempData._bevilling = msg.payload.tempData.persondata.bevilling ? `<div class="mb-3 text-success"><i class="fas fa-check"></i> Bevilget tilskud til fodpleje</div>` : ``;
  return msg;
}

module.exports = Node;