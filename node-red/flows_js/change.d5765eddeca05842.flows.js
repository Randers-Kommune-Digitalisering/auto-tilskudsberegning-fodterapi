const Node = {
  "id": "d5765eddeca05842",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "f0775df5510c6dd0",
  "name": "Saml parsing-fejl med \\n \"missingData\" liste",
  "rules": [
    {
      "t": "set",
      "p": "errors",
      "pt": "msg",
      "to": "payload[$.dataParsed = false]",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "errors",
      "pt": "msg",
      "to": "$append(errors, $flowContext('citizens_missingData'))",
      "tot": "jsonata"
    },
    {
      "t": "delete",
      "p": "citizens_missingData",
      "pt": "flow"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1600,
  "y": 1920,
  "wires": [
    [
      "51be442e43fd3854"
    ]
  ],
  "_order": 917
}

module.exports = Node;