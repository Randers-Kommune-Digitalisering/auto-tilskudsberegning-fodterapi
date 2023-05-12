const Node = {
  "id": "4d85f3207c9d8fa1",
  "type": "template",
  "z": "43652557380ac3f3",
  "d": true,
  "name": "element: rulesButtons",
  "field": "payload.pageElements.rulesButtons",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 1300,
  "y": 580,
  "wires": [
    [
      "af684cb65465eef9"
    ]
  ],
  "_order": 166
}

Node.template = `
<div class="float-right mt-2">
    <button class="btn btn-lg btn-success" id="button_acceptPage" type="button" onclick="postRequest( toJSON( document.getElementById('requestType'), document.getElementById('pageToAccept'), document.getElementById('toAccept'), { 'id': 'ruleUpdates', 'value': appendRules (null {{#payload.rules}}, createRuleObj('{{uid}}') {{/payload.rules}}) } ))">
        Forretningsregler godkendt
    </button>

    <button class="btn btn-lg btn-primary ml-2 goNext" id="button_acceptPage_goNext" type="button" onclick="goToPage('grants')">
        Gå til tilskudssatser
    </button>
</div>

`

module.exports = Node;