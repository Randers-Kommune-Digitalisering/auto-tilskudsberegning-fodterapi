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
  "_order": 263
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  var isAllArchived = true;
  
  var receiptsActions = [];
  var receiptsNoActions = [];
  
  /*
  if (global.get("webData") !== undefined)
  {
      if (global.get("webData")["citizens-actions"] !== undefined)
          receiptsActions += global.get("webData")["citizens-actions"];
  
      if (global.get("webData")["citizens-noactions"] !== undefined)
          receiptsNoActions += global.get("webData")["citizens-noactions"];
  
      if (!Array.isArray(receiptsActions)) receiptsActions = [receiptsActions];
      if (!Array.isArray(receiptsNoActions)) receiptsNoActions = [receiptsNoActions];
  }
  
  var allReceipts = [];
  //allReceipts = allReceipts.concat(receiptsActions, receiptsNoActions);
  for (var i = 0; i < receiptsActions.length; i++)
      allReceipts.push(receiptsActions[i]);
      
  for (var i = 0; i < receiptsNoActions.length; i++)
      allReceipts.push(receiptsNoActions[i]);
      
  var acceptedReceipts;
  
  global.set("tempTest", allReceipts);
  */
  var acceptedReceipts = msg.currentRun.processedReceipts;
  var allReceipts = msg.tempData;
  
  /*
  if (global.get("runHistory", "storeInFile") !== undefined)
      if (global.get("runHistory", "storeInFile")[global.get("runHistory", "storeInFile").length - 1] !== undefined)
          acceptedReceipts = global.get("runHistory", "storeInFile")[global.get("runHistory", "storeInFile").length - 1].processedReceipts;
  */
  
  //typeof global.get("webData") == undefined || !Array.isArray(global.get("webData")["citizens-actions"]) ? 0 : global.get("webData")["citizens-actions"].length;
  var remainingCount = allReceipts.length - acceptedReceipts.length;
  
  for (var i = 0; i < allReceipts.length; i++)
  {
  
      if (allReceipts[i].faktura === null || allReceipts[i].faktura === undefined)
          continue;
  
      var fakturaer = Array.isArray(allReceipts[i].faktura) ? allReceipts[i].faktura : [allReceipts[i].faktura];
  
      for(var j = 0; j < fakturaer.length; j++)
          if (!acceptedReceipts.includes(fakturaer[j].id))
              isAllArchived = false;
  }
  
  msg.isArchived = isAllArchived;
  
  return msg;
}

module.exports = Node;