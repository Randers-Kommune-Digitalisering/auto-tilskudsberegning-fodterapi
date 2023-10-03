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
      "34e917bf2931ac16"
    ]
  ],
  "_order": 436
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  if (msg.payload == null || msg.payload.persondata)
      return msg;
  
  const obj = msg.payload.persondata;
  
  var danmarkNum;
  
  if (obj.danmarkgruppe.toLowerCase().includes("ja") && obj.danmarkgruppe.includes("1"))
      danmarkNum = 1;
  else if (obj.danmarkgruppe.toLowerCase().includes("ja") && obj.danmarkgruppe.includes("2"))
      danmarkNum = 2;
  else if (obj.danmarkgruppe.toLowerCase().includes("ja") && obj.danmarkgruppe.includes("5"))
      danmarkNum = 5;
  else
      danmarkNum = 0;
  
  obj.danmarkgruppe = danmarkNum;
      
  return msg;
}

module.exports = Node;