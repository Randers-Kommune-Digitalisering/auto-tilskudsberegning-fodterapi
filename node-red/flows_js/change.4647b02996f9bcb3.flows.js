const Node = {
  "id": "4647b02996f9bcb3",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "name": "Send status",
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
      "p": "progressTo",
      "pt": "msg",
      "to": "8",
      "tot": "num"
    },
    {
      "t": "set",
      "p": "progressionSpeed",
      "pt": "msg",
      "to": "8",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 690,
  "y": 300,
  "wires": [
    [
      "4534159a9562836d",
      "1e371e11072f5276"
    ]
  ],
  "_order": 954
}

module.exports = Node;