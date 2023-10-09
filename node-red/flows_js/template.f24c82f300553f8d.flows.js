const Node = {
  "id": "f24c82f300553f8d",
  "type": "template",
  "z": "43652557380ac3f3",
  "d": true,
  "name": "element: grantButtons",
  "field": "payload.pageElements.grantButtons",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 940,
  "y": 1780,
  "wires": [
    [
      "e26f367997d78756"
    ]
  ],
  "_order": 392
}

Node.template = `
<div class="float-right mt-2">
    <button class="btn btn-lg btn-success" id="button_acceptPage" type="button" onclick="postRequest( toJSON( document.getElementById('requestType'), document.getElementById('pageToAccept'), document.getElementById('toAccept'), { 'id': 'grantUpdates', 'value': appendRules (null {{#payload.grants.tilskudsperioder.satser}}, createGrantObj('{{id}}') {{/payload.grants.tilskudsperioder.satser}}) } ))">
        Godkend tilskudssatser
    </button>
    
    <button class="btn btn-lg btn-primary ml-2 goNext" id="button_acceptPage_goNext" type="button" onclick="goToPage('run')">
        Gå til ny kørsel
    </button>
</div>

`

module.exports = Node;