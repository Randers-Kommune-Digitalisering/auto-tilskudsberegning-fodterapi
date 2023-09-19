const Node = {
  "id": "ca6df1c9d056a924",
  "type": "function",
  "z": "8ea344595d9a442a",
  "g": "287b33b8879cbbbc",
  "name": "Danmark",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 360,
  "y": 2060,
  "wires": [
    [
      "81cc412d0d2170b9"
    ]
  ],
  "_order": 570
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
      
  
      /*
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