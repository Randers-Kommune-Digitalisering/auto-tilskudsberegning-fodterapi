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
  "_order": 445
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  if(msg.payload == null)
      return msg;
  
  if(!Array.isArray(msg.payload))
      msg.payload = [msg.payload];
      
  for(var i = 0; i < msg.payload.length; i++)
  
  {
      const obj = msg.payload[i].persondata;
  
      var danmarkNum;
  
      if(obj == null || obj.danmarkgruppe == null)
          continue;
  
      if (obj.danmarkgruppe.toLowerCase().includes("ja") && obj.danmarkgruppe.includes("1"))
          danmarkNum = 1;
      else if (obj.danmarkgruppe.toLowerCase().includes("ja") && obj.danmarkgruppe.includes("2"))
          danmarkNum = 2;
      else if (obj.danmarkgruppe.toLowerCase().includes("ja") && obj.danmarkgruppe.includes("5"))
          danmarkNum = 5;
      else
          danmarkNum = 0;
  
      obj.danmarkgruppe = danmarkNum;
      
  
  /* GAMMEL JSONATA KODE (breaker i nogle tilfælde pga. $number parser et tegn som ikke er blevet replaced)
  $.payload ~> |$.persondata|
  (
  {
      "danmarkgruppe": danmarkgruppe
      ~> $replace("Ikke oplyst", "0")
      ~> $replace("Nej", "0")
      ~> $replace("Ja - Gruppe ", "")
      ~> $replace("-", "0")
      ~> $number
  })
  |
  */
  
  }
  return msg;
}

module.exports = Node;