const Node = {
  "id": "5bae06aa5db3623e",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "name": "Send status %",
  "rules": [
    {
      "t": "set",
      "p": "message",
      "pt": "msg",
      "to": "Henter persondata fra KP",
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
      "to": "30",
      "tot": "num"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1460,
  "y": 1240,
  "wires": [
    [
      "bf4eadb0010bea89"
    ]
  ],
  "_order": 577
}

module.exports = Node;