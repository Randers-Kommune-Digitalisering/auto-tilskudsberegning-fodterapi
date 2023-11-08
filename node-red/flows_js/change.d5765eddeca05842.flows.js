const Node = {
  "id": "d5765eddeca05842",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "f0775df5510c6dd0",
  "name": "Saml parsing-fejl \\n med errorList",
  "rules": [
    {
      "t": "set",
      "p": "errorList",
      "pt": "msg",
      "to": "$append( errorList, payload[ $.dataParsed = false ] )",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1630,
  "y": 2060,
  "wires": [
    [
      "75ecdbad0ee90501"
    ]
  ],
  "_order": 512
}

module.exports = Node;