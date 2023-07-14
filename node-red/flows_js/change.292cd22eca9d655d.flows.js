const Node = {
  "id": "292cd22eca9d655d",
  "type": "change",
  "z": "f99fd88fa65c74b9",
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
  "x": 1080,
  "y": 280,
  "wires": [
    [
      "3892c0b6ac8a6421"
    ]
  ],
  "_order": 730
}

module.exports = Node;