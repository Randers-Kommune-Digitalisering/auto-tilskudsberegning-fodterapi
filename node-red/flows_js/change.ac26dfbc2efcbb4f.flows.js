const Node = {
  "id": "ac26dfbc2efcbb4f",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "287b33b8879cbbbc",
  "name": "Saml errors og missingData lister",
  "rules": [
    {
      "t": "set",
      "p": "errors",
      "pt": "msg",
      "to": "$append(errors, missingData)",
      "tot": "jsonata"
    },
    {
      "t": "delete",
      "p": "missingData",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 760,
  "y": 2060,
  "wires": [
    [
      "71c55498ef71a4c9"
    ]
  ],
  "_order": 561
}

module.exports = Node;