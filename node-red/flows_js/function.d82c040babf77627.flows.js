const Node = {
  "id": "d82c040babf77627",
  "type": "function",
  "z": "43652557380ac3f3",
  "name": "element: rulesButtons",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 920,
  "y": 1440,
  "wires": [
    [
      "ac351698921e5e99"
    ]
  ],
  "_order": 381
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  var html = `<div class="float-right mt-2">
                  <button class="btn btn-lg btn-success" id="button_acceptPage" type="button" onclick="postRequestAsync(document.getElementById('requestType').value, toJSON( document.getElementById('pageToAccept'), document.getElementById('toAccept') ), true);lockButton(this.id)"`+ ((global.get("webSettings").state.isRunning) ? ` disabled` : ``) +`>
                      Forretningsregler godkendt
                  </button>
  
                  <button class="btn btn-lg btn-primary ml-2 goNext" id="button_acceptPage_goNext" type="button" onclick="loadPage('grants');lockButton(this.id)">
                      Gå til tilskudssatser
                  </button>
              </div>`;
  
  msg.webElements['rulesButtons'] = html;
  return msg;
}

module.exports = Node;