const Node = {
  "id": "50420eba13820fd6",
  "type": "function",
  "z": "43652557380ac3f3",
  "name": "element: actionsCard",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 760,
  "y": 1200,
  "wires": [
    [
      "833c75852163c6a6"
    ]
  ],
  "_order": 319
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  var receiptCount = 0;
  var totalReceiptCount = 0;
  var remainingCount = 0;
  
  var dataExists = global.get("webData") !== null && global.get("webData") !== undefined;
  
  if (dataExists)
  {
      if (global.get("webData")["citizens-actions"] !== undefined)
  
          if (!Array.isArray(global.get("webData")["citizens-actions"]))
          {
              var webData = global.get("webData");
              webData["citizens-actions"] = [webData["citizens-actions"]];
              global.set("webData", webData);
          }
  
      if (global.get("webData")["citizens-actions"] !== undefined)
          receiptCount = global.get("webData")["citizens-actions"].length;
  
  
      if (global.get("webData")["citizens-noactions"] !== undefined)
          totalReceiptCount = receiptCount + global.get("webData")["citizens-noactions"].length;
  
      for (var i = 0; i < receiptCount; i++)
          if (!((global.get("webData")["citizens-actions"])[i]).archived)
              remainingCount++;
  }
  
  var html = ``;
  
  let webState = global.get("webSettings", "storeInFile")["state"];
  if (webState.isRunning)
  {
      html = `<div class="card border-light">
      <div class="card-header">Anbefalede handlinger</div>
      <div class="card-body">
          <h4 class="card-title">Ingen handlinger</h4>
          <p class="card-text">Vent venligst på at robotten bliver færdig med at arbejde...</p>
          </div>
      </div>`;
      msg.payload.pageElements.actionsCard = html;
      return msg;
  }
  
  var currentRunExists = global.get("runHistory", "storeInFile") !== null && global.get("runHistory", "storeInFile") !== undefined && ( 
      Array.isArray(global.get("runHistory", "storeInFile")) ? !(global.get("runHistory", "storeInFile")[(global.get("runHistory", "storeInFile")).length - 1]).isFinalized : !(global.get("runHistory", "storeInFile")).isFinalized);
  
  var currentRun = currentRunExists ?
                      Array.isArray(global.get("runHistory", "storeInFile")) ?
                          global.get("runHistory", "storeInFile")[(global.get("runHistory", "storeInFile")).length - 1]
                          : global.get("runHistory", "storeInFile") : null;
  
  
  const receiptsAwaiting = currentRunExists ? !currentRun.allReceiptsProcessed : false;
  const isFinialized = currentRunExists ? currentRun.isFinalized : true;
  
  var border = (receiptsAwaiting && !dataExists) || (receiptsAwaiting && totalReceiptCount == 0) ? `danger` : receiptsAwaiting && receiptCount > 0 ? `info` : `light`;
  var title =  (receiptsAwaiting && !dataExists) || (receiptsAwaiting && totalReceiptCount == 0) ? "Genoptag kørsel" :
                receiptsAwaiting ? (remainingCount + ` borgere afventer`) : !isFinialized ? `Afslut kørsel` :`Ingen fakturaer`;
  var body = (receiptsAwaiting && !dataExists) || (receiptsAwaiting && totalReceiptCount == 0) ? "Seneste kørsel blev ikke afsluttet. Genoptag kørslen for at hente manglende data." :
                receiptsAwaiting ? "Efter seneste kørsel er der "+remainingCount+" borgere med anbefalede handlinger som afventer behandling." : !isFinialized ? "Afslut seneste kørsel til højre når du har bekræftet behandlingen af alle borgere." : "Start en ny kørsel for at finde fakturaer som afventer behandling.";
  
  html =
  `<div class="card border-`+border+`">
      <div class="card-header">Anbefalede handlinger</div>
      <div class="card-body">
          <h4 class="card-title">`+title+`</h4>
          <p class="card-text">`+ body+`</p>
          `
          +
          (remainingCount > 0 ? `<div class="d-grid">
              <button class="btn btn-lg btn-light border-light" type="button" onclick="goToPage('view-receipts')">Se borgere</button>
          </div>`
          : ``)
          +
          `
      </div>
  </div>`;
  
  msg.payload.pageElements.actionsCard = html;
  return msg;
}

module.exports = Node;