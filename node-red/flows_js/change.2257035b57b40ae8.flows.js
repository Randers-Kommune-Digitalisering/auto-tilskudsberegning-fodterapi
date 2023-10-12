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
      "to": "#:(storeInFile)::rules",
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
  "y": 1920,
  "wires": [
    [
      "73f3dabb0c5576f5"
    ]
  ],
  "_order": 1033
}

module.exports = Node;