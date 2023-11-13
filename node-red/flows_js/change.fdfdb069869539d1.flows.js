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
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1380,
  "y": 2100,
  "wires": [
    [
      "59bc30d61309401e"
    ]
  ],
  "_order": 744
}

module.exports = Node;