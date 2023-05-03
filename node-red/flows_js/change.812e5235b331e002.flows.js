const Node = {
  "id": "812e5235b331e002",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "13424c114a577170",
  "name": "Send status",
  "rules": [
    {
      "t": "set",
      "p": "message",
      "pt": "msg",
      "to": "Der blev ikke fundet nogle nye fakturaer ved seneste søgning!",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "type",
      "pt": "msg",
      "to": "alert",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "title",
      "pt": "msg",
      "to": "Ingen nye fakturaer",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 120,
  "y": 1140,
  "wires": [
    [
      "d0ec6e3e02665e27"
    ]
  ],
  "_order": 367
}

module.exports = Node;