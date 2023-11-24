const Node = {
  "id": "8f3f7db5cc2d3089",
  "type": "template",
  "z": "43652557380ac3f3",
  "name": "element: grantButtons",
  "field": "webElements.grantButtons",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 940,
  "y": 1560,
  "wires": [
    [
      "e26f367997d78756"
    ]
  ],
  "_order": 259
}

Node.template = `
<div class="float-right mt-2">
    <button class="btn btn-lg btn-primary" id="button_acceptPage" type="button" onclick="postRequestAsync(document.getElementById('requestType').value, toJSON( document.getElementById('pageToAccept'), document.getElementById('toAccept'), { 'id': 'grantUpdates', 'value': appendRules (null {{#global.grants.tilskudsperioder.satser}}, createGrantObj('{{id}}') {{/global.grants.tilskudsperioder.satser}}) } ), true);lockButton(this.id)">
        Godkend tilskudssatser
    </button>
    
    <button class="btn btn-lg btn-primary ml-2 goNext hidden" id="button_acceptPage_goNext" type="button" onclick="loadPage('run');lockButton(this.id)">
        Gå til ny kørsel
    </button>
</div>

`

module.exports = Node;