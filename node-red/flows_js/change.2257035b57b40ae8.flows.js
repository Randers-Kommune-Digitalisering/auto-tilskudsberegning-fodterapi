const Node = {
  "id": "2257035b57b40ae8",
  "type": "change",
  "z": "5bb3204aef17c104",
  "name": "Set rules as response",
  "rules": [
    {
      "t": "set",
      "p": "payload.data.rules",
      "pt": "msg",
      "to": "rules",
      "tot": "global",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 460,
  "y": 1780,
  "wires": [
    [
      "73f3dabb0c5576f5"
    ]
  ],
  "_order": 692
}

module.exports = Node;