const Node = {
  "id": "66d910eed5f34927",
  "type": "function",
  "z": "43652557380ac3f3",
  "name": "element: rulesButtons",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 2020,
  "y": 2440,
  "wires": [
    []
  ],
  "_order": 330
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  var isRunning = msg.payload.webSettings.state.isRunning;
  
  var html = `<div class="float-right mt-2">
                  <button class="btn btn-lg btn-primary" id="button_acceptPage" type="button" onclick="postRequest( toJSON( document.getElementById('requestType'), document.getElementById('pageToAccept'), document.getElementById('toAccept'), { 'id': 'ruleUpdates', 'value': appendRules (null {{#payload.rules}}, createRuleObj('{{uid}}') {{/payload.rules}}) } ))">
                      Godkend forretningsregler
                  </button>
                  
                  <button class="btn btn-lg btn-primary ml-2 goNext hidden" id="button_acceptPage_goNext" type="button" onclick="goToPage('grants')">
                      Gå til tilskudssatser
                  </button>
              </div>`;
  
  msg.payload.pageElements['rulesButtons'] = html;
  return msg;
}

module.exports = Node;