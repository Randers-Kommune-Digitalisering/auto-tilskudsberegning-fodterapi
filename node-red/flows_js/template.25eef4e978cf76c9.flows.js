const Node = {
  "id": "25eef4e978cf76c9",
  "type": "template",
  "z": "43652557380ac3f3",
  "name": "page: grants",
  "field": "payload.pageContent",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 1510,
  "y": 660,
  "wires": [
    [
      "40780cb4bb9bca19"
    ]
  ],
  "_order": 177
}

Node.template = `
<div class="card mb-2">
    <div class="card-header">Tilskudssatser</div>
    <div class="card-body">
        <h6 class="card-subtitle mb-2 text-muted">Sæt tilskudssatserne fra Danmark</h6>
        <p class="card-text">Kontrollér/sæt og derefter godkendt tilskudssatserne som robotten fratrækker tilskudsberegningen såfremt borgeren modtager tilskud fra Sygesikring Danmark.</p>
        
        <div class="form-group" id="form-group">
            <div class="mt-3 border-bottom" style="padding-left: 15px;padding-right: 15px">
                <input type="hidden" id="requestType" value="acceptPage">
                <input type="hidden" id="pageToAccept" value="grants">
                <input type="hidden" id="toAccept" value="{{payload.pageElements.grantsToAccept}}">
            
                {{{payload.pageElements.grantList}}}

            </div>
        </div>

        {{{payload.pageElements.grantButtons}}}

    </div>
</div>
`

module.exports = Node;