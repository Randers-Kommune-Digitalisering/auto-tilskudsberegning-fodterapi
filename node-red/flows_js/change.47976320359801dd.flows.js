const Node = {
  "id": "47976320359801dd",
  "type": "change",
  "z": "25b4c5bead5231de",
  "name": "Initialize data object and keys",
  "rules": [
    {
      "t": "set",
      "p": "metrics",
      "pt": "flow",
      "to": "{\"values\":{\"name\":\"\",\"comment\":\"\",\"type\":\"\",\"datasource\":\"\",\"phase\":\"\",\"message\":\"\",\"value\":null},\"keys\":[]}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "metrics.keys",
      "pt": "flow",
      "to": "$keys($flowContext(\"metrics.values\"))",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 400,
  "y": 80,
  "wires": [
    [
      "cea9e09582b17cad"
    ]
  ],
  "_order": 520
}

module.exports = Node;