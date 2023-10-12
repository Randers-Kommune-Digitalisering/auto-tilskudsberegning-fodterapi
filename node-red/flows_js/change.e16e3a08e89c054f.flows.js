const Node = {
  "id": "e16e3a08e89c054f",
  "type": "change",
  "z": "449328c1ffbe7d56",
  "name": "dataParsed = false \\n + Sæt payload.regelbrud \\n og payload.error",
  "rules": [
    {
      "t": "set",
      "p": "payload.dataParsed",
      "pt": "msg",
      "to": "false",
      "tot": "bool"
    },
    {
      "t": "set",
      "p": "payload.regelbrud",
      "pt": "msg",
      "to": "Persondata blev ikke indlæst korrekt.",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "payload.error",
      "pt": "msg",
      "to": "error.message",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "set",
      "p": "payload.source",
      "pt": "msg",
      "to": "error.source.name",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 910,
  "y": 360,
  "wires": [
    []
  ],
  "_order": 484
}

module.exports = Node;