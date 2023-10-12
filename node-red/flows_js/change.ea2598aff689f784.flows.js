const Node = {
  "id": "ea2598aff689f784",
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
  "x": 290,
  "y": 780,
  "wires": [
    [
      "adfac60207b7f97d"
    ]
  ],
  "_order": 461
}

module.exports = Node;