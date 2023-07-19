const Node = {
  "id": "cea9e09582b17cad",
  "type": "change",
  "z": "25b4c5bead5231de",
  "name": "Get values for log",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "metrics",
      "tot": "flow",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 690,
  "y": 120,
  "wires": [
    [
      "bec2b5ea4586d29e"
    ]
  ],
  "_order": 786
}

module.exports = Node;