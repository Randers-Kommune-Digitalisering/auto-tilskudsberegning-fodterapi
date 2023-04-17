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
  "y": 1000,
  "wires": [
    [
      "50420eba13820fd6"
    ]
  ],
  "_order": 169
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  var lastRunObj = null;
  
  
  
  var lastRunExists = global.get("runHistory", "storeInFile") !== null && global.get("runHistory", "storeInFile") !== undefined && (
      Array.isArray(global.get("runHistory", "storeInFile")) ? (global.get("runHistory", "storeInFile")).length > 0 : true);
  
  var lastRunObj = lastRunExists ?
      Array.isArray(global.get("runHistory", "storeInFile")) ?
          global.get("runHistory", "storeInFile")[(global.get("runHistory", "storeInFile")).length - 1]
          : global.get("runHistory", "storeInFile") : null;
  
  /*
  if (global.get("runHistory", "storeInFile") !== undefined)
      if (global.get("runHistory", "storeInFile")[global.get("runHistory", "storeInFile").length-1] !== undefined)
          lastRunObj = global.get("runHistory", "storeInFile")[global.get("runHistory", "storeInFile").length-1];
  
  */
  
  
  
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
      //var now = new Date(Date.now());
      //var lastRunDate = new Date(lastRunObj.timestamp);
      //var daysSinceRun = parseInt((Date.now() - lastRunObj.timestamp) / 86400000);
  
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
                      <strong>0</strong> fakturaer automatisk behandlet.<br />
                      <strong>5</strong> fakturaer sat til manuel behandling.
                  </div-->
              </p>
          </div>
      </div>`;
  }
  
  msg.payload.pageElements.lastRunCard = html;
  return msg;
}

module.exports = Node;