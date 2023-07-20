const Node = {
  "id": "d3f77bc5f46f3fdc",
  "type": "template",
  "z": "25b4c5bead5231de",
  "g": "6e22e41290516ce8",
  "name": "Create metrics for Prometheus",
  "field": "payload",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 410,
  "y": 320,
  "wires": [
    [
      "e42b609bf9ca9945"
    ]
  ],
  "_order": 796
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