const Node = {
  "id": "26a5a4e0e501d7e9",
  "type": "template",
  "z": "43652557380ac3f3",
  "name": "element: rulesButtons",
  "field": "payload.pageElements.rulesButtons",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 1300,
  "y": 540,
  "wires": [
    [
      "af684cb65465eef9"
    ]
  ],
  "_order": 167
}

Node.template = `
<div class="float-right mt-2">
    <button class="btn btn-lg btn-primary" id="button_acceptPage" type="button" onclick="postRequestAsync(document.getElementById('requestType').value, toJSON( document.getElementById('pageToAccept'), document.getElementById('toAccept'), { 'id': 'ruleUpdates', 'value': appendRules (null {{#payload.rules}}, createRuleObj('{{uid}}') {{/payload.rules}}) } ), true);lockButton(this.id)">
        Godkend forretningsregler
    </button>
    
    <button class="btn btn-lg btn-primary ml-2 goNext hidden" id="button_acceptPage_goNext" type="button" onclick="goToPage('grants');lockButton(this.id)">
        Gå til tilskudssatser
    </button>
</div>

`

module.exports = Node;