const Node = {
  "id": "4647b02996f9bcb3",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "name": "Send status %",
  "rules": [
    {
      "t": "set",
      "p": "message",
      "pt": "msg",
      "to": "Initialiserer kørsel",
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
      "to": "5",
      "tot": "num"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 700,
  "y": 300,
  "wires": [
    [
      "4534159a9562836d"
    ]
  ],
  "_order": 570
}

module.exports = Node;