const Node = {
  "id": "dc943787affd67f4",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "8f09bd47d22cbe66",
  "name": "Send status",
  "rules": [
    {
      "t": "set",
      "p": "message",
      "pt": "msg",
      "to": "Beregner tilskud ...",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "type",
      "pt": "msg",
      "to": "update",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1970,
  "y": 1580,
  "wires": [
    [
      "5ee0ef61ccdcafac"
    ]
  ],
  "_order": 335
}

module.exports = Node;