const Node = {
  "id": "3f57e4a3850446e6",
  "type": "function",
  "z": "43652557380ac3f3",
  "name": "Archive button",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 1840,
  "y": 260,
  "wires": [
    [
      "dfef270919197e96"
    ]
  ],
  "_order": 251
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  var html;
  
  var isArchived = msg.payload.tempDataArray[msg.payload.spec].archived;
  
  var allIsArchived = true;
  for (var i = 0; i < msg.payload.tempDataArray.length; i++)
      if (!msg.payload.tempDataArray[i].archived)
          allIsArchived = false;
  
  /*
  if(msg.payload.webSettings.state.isLocked)
  
      html =
          `<button class="btn btn-lg btn-light border-info" type="button" onclick="postRequest({'requestType': 'finish'})">Afslut behandling</button>`;
  
  else*/
  
  if(allIsArchived)
      html =
          `<button id="buttonReturnStart" class="btn btn-lg btn-light border-light" type="button" onclick="goToPage('start');lockButton(this.id)">Gå til oversigt</button>`;
  
  else
      html =
          `<button id="buttonArchiveReceipt" class="btn btn-lg btn-light border-light` +(isArchived ? ` disabled ` : ``)+`" type="button" onclick="postRequestAsync('archive', {'id': '`+msg.payload.spec+`'}, true);lockButton(this.id)">Bekræft manuel behandling</button>`;
  
  
  msg.payload.tempData._archive = html;
  
  return msg;
}

module.exports = Node;