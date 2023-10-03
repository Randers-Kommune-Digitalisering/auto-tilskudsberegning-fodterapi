const Node = {
  "id": "292cd22eca9d655d",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "2324a12126e9564c",
  "name": "Sæt kørsel flow vars",
  "rules": [
    {
      "t": "set",
      "p": "currentRun",
      "pt": "flow",
      "to": "payload",
      "tot": "msg",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1180,
  "y": 380,
  "wires": [
    [
      "714da3a00ef445ae"
    ]
  ],
  "_order": 804
}

module.exports = Node;