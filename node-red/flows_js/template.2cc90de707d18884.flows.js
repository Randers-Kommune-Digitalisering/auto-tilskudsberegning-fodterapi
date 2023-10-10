const Node = {
  "id": "2cc90de707d18884",
  "type": "template",
  "z": "43652557380ac3f3",
  "name": "element: grantButtons",
  "field": "payload.pageElements.grantButtons",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 1060,
  "y": 2840,
  "wires": [
    [
      "25eef4e978cf76c9"
    ]
  ],
  "_order": 296
}

Node.template = `
<div class="float-right mt-2">
    <button class="btn btn-lg btn-primary" id="button_acceptPage" type="button" onclick="postRequestAsync(document.getElementById('requestType').value, toJSON( document.getElementById('pageToAccept'), document.getElementById('toAccept'), { 'id': 'grantUpdates', 'value': appendRules (null {{#payload.grants.tilskudsperioder.satser}}, createGrantObj('{{id}}') {{/payload.grants.tilskudsperioder.satser}}) } ), true);lockButton(this.id)">
        Godkend tilskudssatser
    </button>
    
    <button class="btn btn-lg btn-primary ml-2 goNext hidden" id="button_acceptPage_goNext" type="button" onclick="goToPage('run');lockButton(this.id)">
        Gå til ny kørsel
    </button>
</div>

`

module.exports = Node;