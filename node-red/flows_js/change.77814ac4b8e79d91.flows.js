const Node = {
  "id": "77814ac4b8e79d91",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "name": "Send status %",
  "rules": [
    {
      "t": "set",
      "p": "message",
      "pt": "msg",
      "to": "Færdigører",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "type",
      "pt": "msg",
      "to": "update",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "value",
      "pt": "msg",
      "to": "100",
      "tot": "num"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1780,
  "y": 3400,
  "wires": [
    [
      "71335bb279f80617"
    ]
  ],
  "_order": 579
}

module.exports = Node;