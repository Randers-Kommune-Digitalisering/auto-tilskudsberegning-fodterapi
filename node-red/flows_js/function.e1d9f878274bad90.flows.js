const Node = {
  "id": "e1d9f878274bad90",
  "type": "function",
  "z": "43652557380ac3f3",
  "name": "element: loginButtons",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 720,
  "y": 1280,
  "wires": [
    [
      "ec8b26f3c6be1b33"
    ]
  ],
  "_order": 362
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  var html = `<div class="float-right mt-2">
                  <button class="btn btn-lg btn-success" id="button_acceptPage" type="button" onclick="postRequestAsync(document.getElementById('requestType').value, toJSON( document.getElementById('pageToAccept'), document.getElementById('toAccept') ), true);lockButton(this.id)"`+ ((global.get("webSettings").state.isRunning) ? ` disabled` : ``) +`>
                      Loginoplysninger godkendt
                  </button>
                  
                  <button class="btn btn-lg btn-primary ml-2 goNext" id="button_acceptPage_goNext" type="button" onclick="loadPage('rules');lockButton(this.id)">
                      Gå til forretningsregler
                  </button>
              </div>
              `;
  
  msg.webElements['loginButtons'] = html;
  return msg;
}

module.exports = Node;