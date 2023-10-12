const Node = {
  "id": "5c5f3603b090298f",
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
  "x": 920,
  "y": 1440,
  "wires": [
    [
      "ac351698921e5e99"
    ]
  ],
  "_order": 379
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