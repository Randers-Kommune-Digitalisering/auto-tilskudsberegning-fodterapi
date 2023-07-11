const Node = {
  "id": "955c894fc9dffd45",
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
  "x": 1300,
  "y": 680,
  "wires": [
    [
      "25eef4e978cf76c9"
    ]
  ],
  "_order": 202
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