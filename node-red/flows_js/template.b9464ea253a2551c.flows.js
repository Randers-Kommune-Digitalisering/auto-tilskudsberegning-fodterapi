const Node = {
  "id": "b9464ea253a2551c",
  "type": "template",
  "z": "f99fd88fa65c74b9",
  "name": "",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 300,
  "y": 4580,
  "wires": [
    [
      "0230bd822b7f09e2"
    ]
  ],
  "_order": 928
}

Node.template = `
DROP TABLE runHistory
`

module.exports = Node;