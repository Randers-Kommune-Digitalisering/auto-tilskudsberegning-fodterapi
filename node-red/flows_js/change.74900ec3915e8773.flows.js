const Node = {
  "id": "74900ec3915e8773",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "name": "Konverter til obj",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload[0]",
      "tot": "msg",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 480,
  "y": 560,
  "wires": [
    [
      "13fd6673e6b6091c"
    ]
  ],
  "_order": 665
}

module.exports = Node;