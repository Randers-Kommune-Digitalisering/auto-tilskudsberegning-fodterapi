const Node = {
  "id": "5bf9561297e40f1e",
  "type": "change",
  "z": "25b4c5bead5231de",
  "name": "Metric value",
  "rules": [
    {
      "t": "set",
      "p": "metrics.values.value",
      "pt": "flow",
      "to": "statusCode = 200 ? 1 : 0",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "metrics.values.message",
      "pt": "flow",
      "to": "$number($flowContext(\"metrics.values.value\")) = 1\t?\t    \"WorkLet is available\"\t:   \"WorkLet is unavailable\"",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 770,
  "y": 540,
  "wires": [
    [
      "3e072cb536e4d1fb"
    ]
  ],
  "_order": 732
}

module.exports = Node;