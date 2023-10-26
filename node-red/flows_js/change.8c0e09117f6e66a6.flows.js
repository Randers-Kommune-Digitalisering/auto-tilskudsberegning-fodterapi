const Node = {
  "id": "8c0e09117f6e66a6",
  "type": "change",
  "z": "fd98a6615193936d",
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
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 190,
  "y": 1560,
  "wires": [
    [
      "d28666b5d1eaa49e"
    ]
  ],
  "_order": 338
}

module.exports = Node;