const Node = {
  "id": "53d7186bbca94b8d",
  "type": "function",
  "z": "43652557380ac3f3",
  "name": "element: loginButtons",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 1100,
  "y": 480,
  "wires": [
    [
      "f4ff9a7a66ddb884"
    ]
  ],
  "_order": 154
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  var html = `<div class="float-right mt-2">
                  <button class="btn btn-lg btn-success" id="button_acceptPage" type="button" onclick="postRequest( toJSON( document.getElementById('requestType'), document.getElementById('pageToAccept'), document.getElementById('toAccept') ))"`+ ((msg.payload.webSettings.state.isRunning) ? ` disabled` : ``) +`>
                      Loginoplysninger godkendt
                  </button>
                  
                  <button class="btn btn-lg btn-primary ml-2 goNext" id="button_acceptPage_goNext" type="button" onclick="goToPage('rules')">
                      Gå til forretningsregler
                  </button>
              </div>
              `;
  
  msg.payload.pageElements['loginButtons'] = html;
  return msg;
}

module.exports = Node;