const Node = {
  "id": "a1bf4b6b1875b569",
  "type": "function",
  "z": "43652557380ac3f3",
  "name": "Formue = null?",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 1840,
  "y": 200,
  "wires": [
    [
      "a2dc4dcc85327a6d"
    ]
  ],
  "_order": 330
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  if (msg.payload.tempData !== null && msg.payload.tempData !== undefined && msg.payload.tempData.persondata !== null  && msg.payload.tempData.persondata !== undefined )
       msg.payload.tempData.persondata._formue = msg.payload.tempData.persondata.formue == null ? "Ikke oplyst" : msg.payload.tempData.persondata.formue + " kr";
      
  return msg;
}

module.exports = Node;