const Node = {
  "id": "b63c87d4502d65b7",
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
      "to": "$number($flowContext(\"metrics.values.value\")) = 1\t?\t    \"KP is available\"\t:   \"KP is unavailable\"",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 770,
  "y": 620,
  "wires": [
    [
      "f901dae578c8a004"
    ]
  ],
  "_order": 645
}

module.exports = Node;