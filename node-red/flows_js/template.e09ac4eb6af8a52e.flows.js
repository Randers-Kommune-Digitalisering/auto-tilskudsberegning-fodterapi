const Node = {
  "id": "e09ac4eb6af8a52e",
  "type": "template",
  "z": "5bb3204aef17c104",
  "g": "e6bee4a694613fda",
  "name": "Create metrics for Prometheus",
  "field": "payload",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 430,
  "y": 500,
  "wires": [
    [
      "d24ee1e3a1e35a40"
    ]
  ],
  "_order": 1039
}

Node.template = `
# HELP {{flow.metrics.values.name}} {{flow.metrics.values.comment}}
# TYPE {{flow.metrics.values.name}} {{flow.metrics.values.type}}

{{flow.metrics.values.name}}
{
    {{flow.metrics.keys[3]}} = "{{{flow.metrics.values.datasource}}}",
    {{flow.metrics.keys[4]}} = "{{flow.metrics.values.phase}}",
    {{flow.metrics.keys[5]}} = "{{flow.metrics.values.message}}"
}
{{flow.metrics.values.value}}
`

module.exports = Node;