const Node = {
  "id": "5cdb9daf21399b9d",
  "type": "change",
  "z": "5bb3204aef17c104",
  "name": "Forespørgsel \\n variabler",
  "rules": [
    {
      "t": "set",
      "p": "tablename",
      "pt": "msg",
      "to": "runHistory",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "orderby",
      "pt": "msg",
      "to": "uid",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "order",
      "pt": "msg",
      "to": "DESC",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "limit",
      "pt": "msg",
      "to": "10",
      "tot": "num"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 430,
  "y": 1900,
  "wires": [
    [
      "134a2ed1cbb7f394"
    ]
  ],
  "_order": 703
}

module.exports = Node;