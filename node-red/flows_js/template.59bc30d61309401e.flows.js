const Node = {
  "id": "59bc30d61309401e",
  "type": "template",
  "z": "5bb3204aef17c104",
  "name": "HTML",
  "field": "payload.data",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 1390,
  "y": 2140,
  "wires": [
    [
      "13f5b8c7391ae4a9"
    ]
  ],
  "_order": 748
}

Node.template = `
{{^global.runHistory}}
Ingen kørselshistorik.
{{/global.runHistory}}
{{#global.runHistory}}
<div class="historyItem">
    <div class="card-text pb-3">
        <span class="badge bg-secondary">
        Kørsel #{{uid}}
        </span>
        <span class="badge bg-light text-dark">
        {{startDate}} - {{endDate}}
        </span>
        <span class="fw-500 float-right">
        {{lastUpdated}}
        </span>
    </div>

    <h6 class="card-subtitle text-muted">
        {{runFinalized}}
        <span class="float-right">
        {{userStartedRun}}
        </span>
    </h6>
</div>
{{/global.runHistory}}
`

module.exports = Node;