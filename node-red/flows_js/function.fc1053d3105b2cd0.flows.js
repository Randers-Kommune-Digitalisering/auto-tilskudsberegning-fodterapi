const Node = {
  "id": "fc1053d3105b2cd0",
  "type": "function",
  "z": "8ea344595d9a442a",
  "g": "954337fe9fd2e7cc",
  "name": "Check if all is archived",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 470,
  "y": 3340,
  "wires": [
    [
      "62b82381ac8d827c"
    ]
  ],
  "_order": 274
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  var isAllArchived = true;
  
  var receiptsActions = [];
  var receiptsNoActions = [];
  var acceptedReceipts = msg.currentRun.processedReceipts;
  var allReceipts = msg.tempData;
  
  var remainingCount = allReceipts.length - acceptedReceipts.length;
  
  for (var i = 0; i < allReceipts.length; i++)
  {
  
      if (allReceipts[i].faktura === null || allReceipts[i].faktura === undefined)
          continue;
  
      var fakturaer = Array.isArray(allReceipts[i].faktura) ? allReceipts[i].faktura : [allReceipts[i].faktura];
  
      for(var j = 0; j < fakturaer.length; j++)
          if (!acceptedReceipts.includes(fakturaer[j].id))
          {
              console.log("Found ID: " + fakturaer[j].id + " which was NOT processed");
              isAllArchived = false;
          }
  }
  
  msg.isArchived = isAllArchived;
  
  return msg;
}

module.exports = Node;