const Node = {
  "id": "c821f126bb053c94",
  "type": "change",
  "z": "25b4c5bead5231de",
  "name": "Metric template",
  "rules": [
    {
      "t": "set",
      "p": "metrics.values.name",
      "pt": "flow",
      "to": "status_kp",
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
      "to": "KP_URL",
      "tot": "env",
      "dc": true
    },
    {
      "t": "set",
      "p": "metrics.values.comment",
      "pt": "flow",
      "to": "This metric mesures web availability status on KP",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 340,
  "y": 620,
  "wires": [
    [
      "d2f32ab6f2673088"
    ]
  ],
  "_order": 590
}

module.exports = Node;