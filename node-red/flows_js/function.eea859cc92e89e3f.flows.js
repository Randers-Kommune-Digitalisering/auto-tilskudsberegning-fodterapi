const Node = {
  "id": "eea859cc92e89e3f",
  "type": "function",
  "z": "8ea344595d9a442a",
  "g": "6c7a3f8252158db6",
  "name": "Fjern duplicates (af Tilføj sag-handlinger)",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 460,
  "y": 2340,
  "wires": [
    [
      "c23d52373f2634a2"
    ]
  ],
  "_order": 594
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  if(msg.payload == null)
      return msg;
  
  if(!Array.isArray(msg.payload))
      msg.payload = [msg.payload];
  
  for (var i = 0; i < msg.payload.length; i++) {
      var obj = msg.payload[i];
  
      var createTypeA = false;
      var createTypeB = false;
      //var tempHandlinger = [];
  
      // Tjek hver borgers handlinger
  
      if (obj.handlinger !== null && obj.handlinger !== undefined) {
  
          if (!Array.isArray(obj.handlinger))
              obj.handlinger = [obj.handlinger];
  
          for (var j = 0; j < obj.handlinger.length; j++) {
              if (obj.handlinger[j].handling == "Opret sag") {
                  if (obj.handlinger[j].type == "A") {
                      if (createTypeA) {
                          //console.log("Another A already exists for receipt " + obj.handlinger[j].fid);
                          obj.handlinger.splice(j, 1);
                          continue;
                      }
                      createTypeA = true;
                      //tempHandlinger.push(msg.payload.handlinger[j]);
                  }
  
                  else if (obj.handlinger[j].type == "B") {
                      if (createTypeB) {
                          //console.log("Another B already exists for receipt " + obj.handlinger[j].fid);
                          obj.handlinger.splice(j, 1);
                          continue;
                      }
                      createTypeB = true;
                      //tempHandlinger.push(msg.payload.handlinger[j]);
                  }
              }
          }
  
  
          msg.payload[i] = obj;
  
      }
  
  
  
  }
  
  return msg;
}

module.exports = Node;