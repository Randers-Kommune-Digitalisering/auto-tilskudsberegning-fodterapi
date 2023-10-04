const Node = {
  "id": "1d2a94a05f330839",
  "type": "function",
  "z": "43652557380ac3f3",
  "name": "element: navbar",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 2040,
  "y": 2600,
  "wires": [
    [
      "32eb88cfb3101407"
    ]
  ],
  "_order": 254
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  // Get data
  
  const webSettings = global.get("webSettings", "storeInFile");
  
  var dataExists = global.get("webData") !== null && global.get("webData") !== undefined;
  
  var currentRunExists = global.get("runHistory", "storeInFile") !== null && global.get("runHistory", "storeInFile") !== undefined && (
      Array.isArray(global.get("runHistory", "storeInFile")) ? !(global.get("runHistory", "storeInFile")[(global.get("runHistory", "storeInFile")).length - 1]).isFinalized : !(global.get("runHistory", "storeInFile")).isFinalized);
  
  var currentRun = currentRunExists ?
      Array.isArray(global.get("runHistory", "storeInFile")) ?
          global.get("runHistory", "storeInFile")[(global.get("runHistory", "storeInFile")).length - 1]
          : global.get("runHistory", "storeInFile") : null;
  
  const receiptsAwaiting = currentRunExists ? !currentRun.allReceiptsProcessed : false;
  const isBeingProcessed = currentRunExists ? !currentRun.isFinalized : false;
  
  function isActive(pageName)
  {
      return (webSettings.state.activePage == pageName);
  }
  function pageAccepted(pageName)
  {
      return (webSettings.acceptances[pageName]);
  }
  
  var html = `<nav class="navbar navbar-expand-lg navbar-dark bg-primary" >
      <div class="container-fluid">
          <a class="navbar-brand randers-logo" onclick="goToPage('start')"></a>
          <a class="navbar-brand randers-titel" onclick="goToPage('start')"></a>
          <ul class="navbar-nav me-auto">
              <li class="nav-item">
                  <a id="nav_start" class="nav-link`+
                  (isActive('start') ? " active" : "")
                  +`" onclick="goToPage('start')">Start</a>
              </li>
              <li class="nav-item">
                  <a id="nav_login" class="nav-link`+
                  (isActive('login') ? " active" : "") + 
                  (pageAccepted('login') ? " nav-success" : "")
                  +`" onclick="goToPage('login')">Loginoplysninger</a>
              </li>
              <li class="nav-item">
                  <a id="nav_rules" class="nav-link`+
                  (isActive('rules') ? " active" : "") +
                  (pageAccepted('rules') ? " nav-success" : "")
                  +`" onclick="goToPage('rules')">Forretningsregler</a>
              </li>
              <li class="nav-item">
                  <a id="nav_grants" class="nav-link`+
                  (isActive('grants') ? " active" : "") +
                  (pageAccepted('grants') ? " nav-success" : "")
                  +`" onclick="goToPage('grants')">Tilskudssatser</a>
              </li>`;
  
  
  var receiptCount = 0;
  
  if (global.get("webData") !== undefined)
      if (global.get("webData")["citizens-actions"] !== undefined)
          receiptCount += global.get("webData")["citizens-actions"].length;
  
  if (global.get("webData") !== undefined)
      if (global.get("webData")["citizens-noactions"] !== undefined)
          receiptCount += global.get("webData")["citizens-noactions"].length;
  
  
  if (webSettings.state.isRunning )
          html +=
              `<li class="nav-item">
              <a id="nav_run" class="nav-link`+
              (isActive('run') ? " active" : "")
              + `" onclick="goToPage('run')">` +
              `Robotten kører<i class="fa-lg fas fa-spinner fa-spin" style="margin-left: 10px"></i>`
              + `</a>
          </li>`;
          
  else if ((isBeingProcessed && !dataExists) || (receiptsAwaiting && receiptCount == 0))
      html +=
          `<li class="nav-item">
              <a id="nav_run" class="nav-link`+
              (isActive('run') ? " active" : "")
              + `" onclick="goToPage('run')">Genoptag kørsel</a>
          </li>`;
  
  else if (receiptsAwaiting && isBeingProcessed)
      html +=
          `<li class="nav-item">
              <a id="nav_view-receipts" class="nav-link`+
              (isActive('view-receipts') ? " active" : "")
              + `" onclick="goToPage('view-receipts')">Anbefalede handlinger</a>
          </li>`
      +  `<li class="nav-item">
              <a id="nav_view-nograntreceipts" class="nav-link`+
              (isActive('view-nograntreceipts') ? " active" : "")
              + `" onclick="goToPage('view-nograntreceipts')">Borgere uden bevilling</a>
          </li>`;
  
  else if (!receiptsAwaiting && isBeingProcessed)
      html +=
          `<li class="nav-item">
              <a id="nav_view-receipts" class="nav-link`+
          (isActive('view-receipts') ? " active" : "")
          + `" onclick="goToPage('view-receipts')">Anbefalede handlinger</a>
          </li>`
          + `<li class="nav-item">
              <a id="nav_view-nograntreceipts" class="nav-link`+
          (isActive('view-nograntreceipts') ? " active" : "")
          + `" onclick="goToPage('view-nograntreceipts')">Borgere uden bevilling</a>
          </li>`
          +
          `<li class="nav-item">
              <a id="nav_run" class="nav-link`+
              (isActive('run') ? " active" : "")
              +`" onclick="goToPage('run')">Afslut kørsel</a>
          </li>`;
  
  else if (pageAccepted('login') && pageAccepted('rules') && pageAccepted('grants'))
      html +=
          `<li class="nav-item">
              <a id="nav_run" class="nav-link`+
              (isActive('run') ? " active" : "")
              + `" onclick="goToPage('run')">` +
              (webSettings.state.isRunning ? `Robotten kører<i class="fa-lg fas fa-spinner fa-spin" style="margin-left: 10px"></i>` : `Ny kørsel`)
              + `</a>
          </li>`;
  
  html += `
          </ul>
      </div>
  </nav >`;
  
  msg.payload.pageElements['navbar'] = html;
  return msg;
}

module.exports = Node;