const Node = {
  "id": "186f2cce53b0948f",
  "type": "change",
  "z": "5bb3204aef17c104",
  "g": "404b73d5fb6cfa91",
  "name": "Send alert",
  "rules": [
    {
      "t": "set",
      "p": "title",
      "pt": "msg",
      "to": "Der opstod en fejl",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "message",
      "pt": "msg",
      "to": "Der kunne ikke oprettes forbindelse til databasen. Prøv igen senere.",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "type",
      "pt": "msg",
      "to": "alert",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1010,
  "y": 1540,
  "wires": [
    [
      "2df29ba14ed1e3db"
    ]
  ],
  "_order": 762
}

module.exports = Node;