const Node = {
  "id": "e26f367997d78756",
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
  "y": 1580,
  "wires": [
    [
      "91310d5bb018c205"
    ]
  ],
  "_order": 249
}

Node.template = `
<ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/start">Start</a></li>
    <li class="breadcrumb-item"><a href="/login">Loginoplysninger</a></li>
    <li class="breadcrumb-item"><a href="/rules">Forretningsregler</a></li>
    <li class="breadcrumb-item active">Tilskudssatser</li>
</ol>

<div class="card mb-2">
    <div class="card-header">Tilskudssatser</div>
    <div class="card-body">
        <h6 class="card-subtitle mb-2 text-muted">Sæt tilskudssatserne fra Danmark</h6>
        <p class="card-text">Kontrollér/sæt og derefter godkendt tilskudssatserne som robotten fratrækker tilskudsberegningen såfremt borgeren modtager tilskud fra Sygesikring Danmark.</p>
        
        <div class="form-group" id="form-group">
            <div class="mt-3 border-bottom" style="padding-left: 15px;padding-right: 15px">
                <input type="hidden" id="requestType" value="acceptPage">
                <input type="hidden" id="pageToAccept" value="grants">
                <input type="hidden" id="toAccept" value="{{webElements.grantsToAccept}}">
            
                {{{webElements.grantList}}}

            </div>
        </div>

        {{{webElements.grantButtons}}}

    </div>
</div>
`

module.exports = Node;