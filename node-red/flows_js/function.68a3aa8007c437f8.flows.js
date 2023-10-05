const Node = {
  "id": "68a3aa8007c437f8",
  "type": "function",
  "z": "f99fd88fa65c74b9",
  "g": "db9b0160d9fdb906",
  "name": "Fjern duplicates (af Tilføj sag-handlinger)",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 340,
  "y": 3200,
  "wires": [
    [
      "b0f6c119d94afbe4"
    ]
  ],
  "_order": 870
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