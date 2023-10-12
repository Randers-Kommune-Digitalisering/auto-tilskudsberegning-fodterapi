const Node = {
  "id": "4eac0b9c430a80ed",
  "type": "template",
  "z": "43652557380ac3f3",
  "name": "element: rulesButtons",
  "field": "webElements.rulesButtons",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 920,
  "y": 1400,
  "wires": [
    [
      "ac351698921e5e99"
    ]
  ],
  "_order": 372
}

Node.template = `
<div class="float-right mt-2">
    <button class="btn btn-lg btn-primary" id="button_acceptPage" type="button" onclick="postRequestAsync(document.getElementById('requestType').value, toJSON( document.getElementById('pageToAccept'), document.getElementById('toAccept'), { 'id': 'ruleUpdates', 'value': appendRules (null {{#global.rules}}, createRuleObj('{{uid}}') {{/global.rules}}) } ), true);lockButton(this.id)">
        Godkend forretningsregler
    </button>
    
    <button class="btn btn-lg btn-primary ml-2 goNext hidden" id="button_acceptPage_goNext" type="button" onclick="loadPage('grants');lockButton(this.id)">
        Gå til tilskudssatser
    </button>
</div>

`

module.exports = Node;