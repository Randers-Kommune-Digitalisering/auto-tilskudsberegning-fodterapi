const Node = {
  "id": "22c31b5dcd690404",
  "type": "function",
  "z": "43652557380ac3f3",
  "name": "element: lastRunCard",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 760,
  "y": 1160,
  "wires": [
    [
      "50420eba13820fd6"
    ]
  ],
  "_order": 217
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  var lastRunObj = null;
  
  var lastRunExists = global.get("runHistory", "storeInFile") !== null && global.get("runHistory", "storeInFile") !== undefined && (
      Array.isArray(global.get("runHistory", "storeInFile")) ? (global.get("runHistory", "storeInFile")).length > 0 : true);
  
  var lastRunObj = lastRunExists ?
      Array.isArray(global.get("runHistory", "storeInFile")) ?
          global.get("runHistory", "storeInFile")[(global.get("runHistory", "storeInFile")).length - 1]
          : global.get("runHistory", "storeInFile") : null;
  
  var html = ``;
  /*
  if (msg.payload.webSettings.state.isRunning)
  {
      html =
          `<div class="card border-light">
          <div class="card-header">Seneste kørsel</div>
          <div class="card-body">
              <h4 class="card-title">Robotten arbejder lige nu...</h4>
          </div>
      </div>`;
  }
  
  
  else*/ if (lastRunObj === null)
  {
  
      html =
      `<div class="card border-light">
          <div class="card-header">Seneste kørsel</div>
          <div class="card-body">
              <h4 class="card-title">Ingen data</h4>
          </div>
      </div>`;
  }
  
  else
  {
      var daysSinceRun = Date.now() - lastRunObj.timestamp;
      daysSinceRun = Math.ceil(daysSinceRun / (1000 * 3600 * 24)) -1;
  
      var dayordays = daysSinceRun > 1 ? "dage" : "dag";
      var lastRun = daysSinceRun == 0 ? "Tidligere i dag" : daysSinceRun + " " + dayordays + " siden";
  
      html =
      `<div class="card border-light">
          <div class="card-header">Seneste kørsel</div>
          <div class="card-body">
              <h4 class="card-title">`+ lastRun + `</h4>
              <p class="card-text">Robotten kørte sidst d. `+ new Date(lastRunObj.timestamp).toLocaleString() + `<br />
                  <!--div class="mt-1">
                      <strong>`+ lastRunObj.processedReceipts.length +`</strong> fakturaer behandlet.<br />
                  </div-->
              </p>
              <a onclick="goToPage('run-history')">Se kørselshistorik</a>
          </div>
      </div>`;
  }
  
  msg.payload.pageElements.lastRunCard = html;
  return msg;
}

module.exports = Node;