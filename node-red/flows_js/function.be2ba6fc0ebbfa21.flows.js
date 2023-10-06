const Node = {
  "id": "be2ba6fc0ebbfa21",
  "type": "function",
  "z": "449328c1ffbe7d56",
  "name": "Danmark",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 480,
  "y": 220,
  "wires": [
    [
      "34e917bf2931ac16",
      "c98f7a2ea9c74d12"
    ]
  ],
  "_order": 469
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  const danmark = msg.payload.persondata.danmarkgruppe;
  
  var danmarkNum;
  
  if
  (danmark.toLowerCase().includes("ja")   && danmark.includes("1"))
      danmarkNum = 1;
  
  else if
  (danmark.toLowerCase().includes("ja")   && danmark.includes("2"))
      danmarkNum = 2;
  
  else if
  (danmark.toLowerCase().includes("ja")   && danmark.includes("5"))
      danmarkNum = 5;
  
  else
      danmarkNum = 0;
  
  msg.payload.persondata.danmarkgruppe = danmarkNum;
      
  return msg;
}

module.exports = Node;