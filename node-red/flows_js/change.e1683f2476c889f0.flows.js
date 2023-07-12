const Node = {
  "id": "e1683f2476c889f0",
  "type": "change",
  "z": "25b4c5bead5231de",
  "name": "Metric template",
  "rules": [
    {
      "t": "set",
      "p": "metrics.values.name",
      "pt": "flow",
      "to": "status_worklet",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "metrics.values.type",
      "pt": "flow",
      "to": "gauge",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "metrics.values.phase",
      "pt": "flow",
      "to": "extract",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "metrics.values.datasource",
      "pt": "flow",
      "to": "https://workletnew.snapp.dk/",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "metrics.values.comment",
      "pt": "flow",
      "to": "\"This metric mesures web availability status on \" & $flowContext(\"metrics.values.datasource\")",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 340,
  "y": 540,
  "wires": [
    [
      "aec12e4f9ee9c886"
    ]
  ],
  "_order": 590
}

module.exports = Node;