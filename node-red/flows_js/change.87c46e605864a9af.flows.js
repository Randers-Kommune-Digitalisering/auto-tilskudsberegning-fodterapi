const Node = {
  "id": "87c46e605864a9af",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "name": "Flyt regel til payload",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{ \"rules\": payload }",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 980,
  "y": 2340,
  "wires": [
    [
      "ac743eeadbdc64fa"
    ]
  ],
  "_order": 944
}

module.exports = Node;