const Node = {
  "id": "833c75852163c6a6",
  "type": "function",
  "z": "43652557380ac3f3",
  "name": "newRunCard body",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 750,
  "y": 1080,
  "wires": [
    [
      "e4fc06b7c36a80c5"
    ]
  ],
  "_order": 131
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  // Set menu html
  const loginAccepted = msg.payload.webSettings.acceptances.login;
  const rulesAccepted = msg.payload.webSettings.acceptances.rules;
  const grantsAccepted = msg.payload.webSettings.acceptances.grants;
  const isRunning = msg.payload.webSettings.state.isRunning;
  
  var dataExists = global.get("webData") !== null && global.get("webData") !== undefined;
  
  var currentRunExists = global.get("runHistory", "storeInFile") !== null && global.get("runHistory", "storeInFile") !== undefined && (
      Array.isArray(global.get("runHistory", "storeInFile")) ? !(global.get("runHistory", "storeInFile")[(global.get("runHistory", "storeInFile")).length - 1]).isFinalized : !(global.get("runHistory", "storeInFile")).isFinalized);
  
  var currentRun = currentRunExists ?
      Array.isArray(global.get("runHistory", "storeInFile")) ?
          global.get("runHistory", "storeInFile")[(global.get("runHistory", "storeInFile")).length - 1]
          : global.get("runHistory", "storeInFile") : null;
  
  const receiptsAwaiting = currentRunExists ? !currentRun.allReceiptsProcessed : false;
  const isBeingProcessed = currentRunExists ? !currentRun.isFinalized : false;
  
  
  var rejectedCitizenCount = 0; //global.get("webData")["citizens-noactions"] == null ? 0 : global.get("webData")["citizens-noactions"].length;
  var receiptCount = 0;
  
  if (global.get("webData") !== undefined)
      if (global.get("webData")["citizens-actions"] !== undefined)
      {
          if (!Array.isArray(global.get("webData")["citizens-actions"]))
          {
              var tempWebData = global.get("webData");
              tempWebData["citizens-actions"] = [tempWebData["citizens-actions"]];
              global.set("webData", tempWebData);
          }
  
          receiptCount += global.get("webData")["citizens-actions"].length;
      }
  
  if (global.get("webData") !== undefined)
      if (global.get("webData")["citizens-noactions"] !== undefined)
      {
          if (!Array.isArray(global.get("webData")["citizens-noactions"])) {
              var tempWebData = global.get("webData");
              tempWebData["citizens-noactions"] = [tempWebData["citizens-noactions"]];
              global.set("webData", tempWebData);
          }
  
          rejectedCitizenCount = global.get("webData")["citizens-noactions"].length;
          receiptCount += rejectedCitizenCount;
      }
  
  var remainingCount = 0;
  
  for (var i = 0; i < rejectedCitizenCount; i++)
      if (!(global.get("webData")["citizens-noactions"])[i].archived)
          remainingCount++;
  
  rejectedCitizenCount = remainingCount;
  
  
  
  var cardHeader = "Ny kørsel";
  var cardTitle ="Kør nu";
  var cardText = "Robotten er nu klar til at søge efter nye fakturaer og beregne tilskud!";
  var buttonText = "Kør robot";
  var linkhref = "run";
  var border = "light";
  var buttonClasses = " ";
  
  
  
  if (isRunning) {
      cardTitle = "Robotten arbejder ... <i class='float-right fa-md fas fa-spinner fa-spin' style='margin-right: 5px'></i>";
      cardText = "Robotten arbejder på at finde nye fakturaer samt beregne tilskud."
      buttonText = "Vent venligst";
      buttonClasses += "hidden";
      linkhref = "view-receipts";
      border = "info";
  }
  else if ((receiptsAwaiting && isBeingProcessed && !dataExists) || (receiptsAwaiting && receiptCount == 0))
  {
      cardHeader = "Genoptag kørsel";
      cardTitle = "Data mangler";
      cardText = "Genoptag kørslen for at hente manglende data.";
      linkhref = "run";
      buttonText = "Genoptag";
  }
  
  else if (receiptsAwaiting && rejectedCitizenCount > 0)
  {
      cardHeader = "Borgere uden gyldig bevilling";
      cardTitle = rejectedCitizenCount == 0 ? "Ingen fakturaer" : rejectedCitizenCount + " borgere afventer";
      cardText = "Efter seneste kørsel er der " + rejectedCitizenCount + " borgere uden gyldig bevilling som afventer bekræftelse.";
      buttonText = "Se borgere";
      buttonClasses += rejectedCitizenCount == 0 ? "hidden" : "";
      linkhref = "view-nograntreceipts";
      border = rejectedCitizenCount > 0 ? "warning" : "light";
  
  }
  else if (isBeingProcessed && !receiptsAwaiting)
  {
      cardHeader = "Afslut kørsel";
      cardTitle = "Alle borgere behandlet",
      cardText = "Alle anbefalede handlinger samt ej berretigede borgere er bekræftet. Afslut kørslen nu."
      buttonText = "Afslut kørsel";
      border = "success";
  }
  
  else if (receiptsAwaiting && rejectedCitizenCount == 0)
  {
      cardHeader = "Afslut kørsel";
      cardTitle = "Alle borgere behandlet",
          cardText = "Alle borgere uden bevilling er bekræftet. Bekræft anbefalede handlinger før du afslutter kørslen."
      buttonText = "Afslut kørsel";
      buttonClasses += "disabled";
  }
  
  else if (!loginAccepted) {
      cardTitle = "Godkend login";
      cardText = "Før du kan søge efter nye fakturaer, skal du godkende loginoplysninger."
      buttonText = "Gå til loginoplysninger";
      linkhref = "login";
  }
  
  else if (!rulesAccepted) {
      cardTitle = "Godkend regelsæt";
      cardText = "Før du kan søge efter nye fakturaer, skal du godkende forretningsregler."
      buttonText = "Gå til forretningsregler";
      linkhref = "rules";
  }
  
  else if(!grantsAccepted)
  {
      cardTitle = "Godkend tilskudssatser";
      cardText = "Før du kan søge efter nye fakturaer, skal du godkende tilskudssatser."
      buttonText = "Gå til tilskudssatser";
      linkhref = "grants";
  }
  
  
  var classes = "border-" + border;
  
  var html = `<h4 class="card-title">`+cardTitle+`</h4>
          <p class="card-text">`+cardText+`</p>
          <div class="d-grid">
              <button class="btn btn-lg btn-light border-light`+buttonClasses+`" onclick="goToPage('`+linkhref+`')">`+buttonText+`</button>
          </div>`;
  
  msg.payload.pageElements['newRunCardBody'] = html;
  msg.payload.pageElements['newRunCardClasses'] = classes;
  msg.payload.pageElements['newRunCardHeader'] = cardHeader;
  return msg;
}

module.exports = Node;