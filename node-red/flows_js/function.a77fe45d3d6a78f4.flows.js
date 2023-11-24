const Node = {
  "id": "a77fe45d3d6a78f4",
  "type": "function",
  "z": "43652557380ac3f3",
  "name": "element: grantButtons",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 940,
  "y": 1600,
  "wires": [
    [
      "e26f367997d78756"
    ]
  ],
  "_order": 260
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  var html = `<div class="float-right mt-2">
                  <button class="btn btn-lg btn-success" id="button_acceptPage" type="button" onclick="postRequestAsync(document.getElementById('requestType').value, toJSON( document.getElementById('pageToAccept'), document.getElementById('toAccept') ), true);lockButton(this.id)"`+ ((global.get("webSettings").state.isRunning) ? ` disabled` : ``) + `>
                      Tilskudssatser godkendt
                  </button>
  
                  <button class="btn btn-lg btn-primary ml-2 goNext" id="button_acceptPage_goNext" type="button" onclick="loadPage('run');lockButton(this.id)">
                      Gå til ny kørsel
                  </button>
              </div>`;
  
  msg.webElements['grantButtons'] = html;
  return msg;
}

module.exports = Node;