const Node = {
  "id": "381970c176b042aa",
  "type": "function",
  "z": "43652557380ac3f3",
  "name": "Count receipts",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 740,
  "y": 880,
  "wires": [
    [
      "89f051f162c9b4b6"
    ]
  ],
  "_order": 330
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  var dataExists = global.get("webData") !== null && global.get("webData") !== undefined;
  
  
  var receiptCount = 0;
  var receiptNoActionCount = 0;
  
  
  if (dataExists)
  {
  
      if (global.get("webData")["citizens-actions"] !== undefined)
          receiptCount = global.get("webData")["citizens-actions"].length;
  
      if (global.get("webData")["citizens-noactions"] !== undefined)
          receiptNoActionCount = global.get("webData")["citizens-noactions"].length;
  
  }
  
  msg.payload.pageElements = {};
  msg.payload.pageElements.receiptCount = receiptCount;
  msg.payload.pageElements.receiptNoActionCount = receiptNoActionCount;
  
  return msg;
}

module.exports = Node;