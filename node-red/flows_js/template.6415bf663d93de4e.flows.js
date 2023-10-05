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
  "y": 1900,
  "wires": [
    [
      "acd16792b5aedcb6"
    ]
  ],
  "_order": 398
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
            <a class="btn btn-primary fs-13 p-3" onclick="startRun()" role="button">
            Start kørsel
            </a>
        </div>

        <p class="card-text">Robotten er nu klar til at køre. Robotten henter fakturaer mellem d. XX/XX-XXXX og d. XX/XX-XXXX.<br />Beslutningsstøtte vil blive fremvist efter kørsel.</p>

    </div>
</div>
`

module.exports = Node;