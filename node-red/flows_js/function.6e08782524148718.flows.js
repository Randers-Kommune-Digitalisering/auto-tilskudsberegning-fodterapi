const Node = {
  "id": "6e08782524148718",
  "type": "function",
  "z": "43652557380ac3f3",
  "name": "element: grantButtons",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 1300,
  "y": 680,
  "wires": [
    [
      "25eef4e978cf76c9"
    ]
  ],
  "_order": 218
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  var html = `<div class="float-right mt-2">
                  <button class="btn btn-lg btn-success" id="button_acceptPage" type="button" onclick="postRequestAsync(document.getElementById('requestType').value, toJSON( document.getElementById('pageToAccept'), document.getElementById('toAccept') ), true);lockButton(this.id)"`+ ((global.get("webSettings", "storeInFile").state.isRunning) ? ` disabled` : ``) + `>
                      Tilskudssatser godkendt
                  </button>
  
                  <button class="btn btn-lg btn-primary ml-2 goNext" id="button_acceptPage_goNext" type="button" onclick="goToPage('run');lockButton(this.id)">
                      Gå til ny kørsel
                  </button>
              </div>`;
  
  msg.payload.pageElements['grantButtons'] = html;
  return msg;
  
  /*
  
  function pageAccepted(pageName)
  {
      return (msg.payload.webSettings.acceptances[pageName]);
  }
  function allPagesAccepted()
  {
      return (pageAccepted("login") && pageAccepted("rules") && pageAccepted("grants"));
  }
  
  var html = "";
  
  if(allPagesAccepted())
  
      html = `<div class="float-right mt-2">
                  <button class="btn btn-lg btn-success" id="button_acceptPage" type="button" onclick="postRequest( toJSON( document.getElementById('requestType'), document.getElementById('pageToAccept'), document.getElementById('toAccept') ))"`+ ((msg.payload.webSettings.state.isRunning) ? ` disabled` : ``) +`>
                      Godkend tilskudssatser
                  </button>
                  
                  <button class="btn btn-lg btn-primary ml-2 goNext" id="button_acceptPage_goNext" type="button" onclick="goToPage('run')">
                      Gå til ny kørsel
                  </button>
              </div>
              `;
  
  else
  
      html = `<div class="float-right mt-2">
                  <button class="btn btn-lg btn-success" id="button_acceptPage" type="button" onclick="postRequest( toJSON( document.getElementById('requestType'), document.getElementById('pageToAccept'), document.getElementById('toAccept'), { 'id': 'grantUpdates', 'value': appendRules (null {{#payload.grants.tilskudsperioder.satser}}, createGrantObj('{{id}}') {{/payload.grants.tilskudsperioder.satser}}) } ))">
                      Tilskudssatser godkendt
                  </button>
                  
                  <button class="btn btn-lg btn-secondary ml-2 goNext" id="button_acceptPage_goNext" type="button" onclick="goToPage('run')" disabled>
                      Gå til ny kørsel
                  </button>
              </div>
              `;
  
  
  msg.payload.pageElements['grantButtons'] = html;
  return msg;
  */
}

module.exports = Node;