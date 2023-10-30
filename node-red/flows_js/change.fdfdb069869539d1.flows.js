const Node = {
  "id": "fdfdb069869539d1",
  "type": "change",
  "z": "5bb3204aef17c104",
  "name": "Rens svar",
  "rules": [
    {
      "t": "delete",
      "p": "error",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "sql",
      "pt": "msg"
    },
    {
      "t": "set",
      "p": "payload.requestType",
      "pt": "msg",
      "to": "getRunHistory",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1400,
  "y": 2140,
  "wires": [
    [
      "13f5b8c7391ae4a9"
    ]
  ],
  "_order": 715
}

module.exports = Node;