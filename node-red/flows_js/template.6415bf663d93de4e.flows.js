const Node = {
  "id": "6415bf663d93de4e",
  "type": "template",
  "z": "43652557380ac3f3",
  "name": "HTML",
  "field": "payload",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 690,
  "y": 1720,
  "wires": [
    [
      "acd16792b5aedcb6"
    ]
  ],
  "_order": 263
}

Node.template = `
{{#webElements.redirect}}
<script>window.location.href = "/{{url}}";</script>
{{/webElements.redirect}}

<ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/start">Start</a></li>
    <li class="breadcrumb-item"><a href="/login">Loginoplysninger</a></li>
    <li class="breadcrumb-item"><a href="/rules">Forretningsregler</a></li>
    <li class="breadcrumb-item"><a href="/grants">Tilskudssatser</a></li>
    <li class="breadcrumb-item active">Ny kørsel</li>
</ol>

<div class="card mb-2">
    <div class="card-header">Ny kørsel</div>
    <div class="card-body">

        <div class="float-right">
            <a class="btn btn-primary fs-13 p-3 {{webElements.runButton.disabled}}" onclick="startRun()" role="button" id="button_startRun">
                {{#webElements.runButton.disabled}}
                    <span class="pr-3 pl-1">KØRER</span><i class="fa-lg fas fa-spinner fa-spin"></i>
                {{/webElements.runButton.disabled}}
                {{^webElements.runButton.disabled}}
                    Start kørsel
                {{/webElements.runButton.disabled}}
            </a>
        </div>

        <h4 class="card-title">Kørselsdetaljer</h4>
        
        <p class="card-text d-flex" style="gap: 35px">
            <span><span class="fw-500">DQ-bruger</span>: {{global.webData.dqCreds.dqUser}}</span>
        </p>
        

    </div>
</div>
`

module.exports = Node;