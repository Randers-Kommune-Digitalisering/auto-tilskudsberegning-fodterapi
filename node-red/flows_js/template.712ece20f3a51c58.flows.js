const Node = {
  "id": "712ece20f3a51c58",
  "type": "template",
  "z": "f99fd88fa65c74b9",
  "name": "",
  "field": "payload",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 800,
  "y": 4420,
  "wires": [
    [
      "2ed3c08c124a5fc2"
    ]
  ],
  "_order": 1002
}

Node.template = `
{{#global.grants.tilskudsperioder.satser}}
ja
{{/global.grants.tilskudsperioder.satser}}
`

module.exports = Node;