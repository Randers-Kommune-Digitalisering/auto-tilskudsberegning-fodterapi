const Node = {
  "id": "da8e0bf8cffcd637",
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
  "x": 370,
  "y": 2080,
  "wires": [
    [
      "938db90da2b0ab5a"
    ]
  ],
  "_order": 731
}

module.exports = Node;