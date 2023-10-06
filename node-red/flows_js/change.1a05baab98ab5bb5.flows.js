const Node = {
  "id": "1a05baab98ab5bb5",
  "type": "change",
  "z": "5bb3204aef17c104",
  "g": "07efac789a94a332",
  "name": "Send status",
  "rules": [
    {
      "t": "set",
      "p": "message",
      "pt": "msg",
      "to": "Der skete en fejl ved anmodningen. Prøv igen.",
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
      "to": "Fejl",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1960,
  "y": 1080,
  "wires": [
    [
      "d715c7ca9a8313fb"
    ]
  ],
  "_order": 819
}

module.exports = Node;