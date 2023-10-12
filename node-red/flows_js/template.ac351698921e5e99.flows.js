const Node = {
  "id": "ac351698921e5e99",
  "type": "template",
  "z": "43652557380ac3f3",
  "name": "HTML",
  "field": "payload",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 1200,
  "y": 1420,
  "wires": [
    [
      "9b9b9d66c4a2e678"
    ]
  ],
  "_order": 373
}

Node.template = `
<ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/start">Start</a></li>
    <li class="breadcrumb-item"><a href="/login">Loginoplysninger</a></li>
    <li class="breadcrumb-item active">Forretningsregler</li>
</ol>

<div class="card mb-2">
    <div class="card-header">Forretningsregler</div>
    <div class="card-body">
        <h6 class="card-subtitle mb-2 text-muted">Sæt kriterier for tilskud</h6>
        <p class="card-text">Kontrollér/sæt og derefter godkendt forretningsreglerne som robotten benytter som beslutningsgrundlag.</p>
        
        <div class="form-group" id="form-group">
            <div class="mt-3 border-bottom" style="padding-left: 15px;padding-right: 15px">
                <input type="hidden" id="requestType" value="acceptPage">
                <input type="hidden" id="pageToAccept" value="rules">
                <input type="hidden" id="toAccept" value="{{webElements.rulesToAccept}}">
            
                {{{webElements.ruleList}}}

            </div>
        </div>

        {{{webElements.rulesButtons}}}

    </div>
</div>
`

module.exports = Node;