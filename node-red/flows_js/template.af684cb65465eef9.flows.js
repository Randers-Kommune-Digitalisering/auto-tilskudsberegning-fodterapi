const Node = {
  "id": "af684cb65465eef9",
  "type": "template",
  "z": "43652557380ac3f3",
  "name": "page: rules",
  "field": "payload.pageContent",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 1270,
  "y": 2580,
  "wires": [
    [
      "ec0875277dd56ced"
    ]
  ],
  "_order": 265
}

Node.template = `
<div class="card mb-2">
    <div class="card-header">Forretningsregler</div>
    <div class="card-body">
        <h6 class="card-subtitle mb-2 text-muted">Sæt kriterier for tilskud</h6>
        <p class="card-text">Kontrollér/sæt og derefter godkendt forretningsreglerne som robotten benytter som beslutningsgrundlag.</p>
        
        <div class="form-group" id="form-group">
            <div class="mt-3 border-bottom" style="padding-left: 15px;padding-right: 15px">
                <input type="hidden" id="requestType" value="acceptPage">
                <input type="hidden" id="pageToAccept" value="rules">
                <input type="hidden" id="toAccept" value="{{payload.pageElements.rulesToAccept}}">
            
                {{{payload.pageElements.ruleList}}}

            </div>
        </div>

        {{{payload.pageElements.rulesButtons}}}

    </div>
</div>
`

module.exports = Node;