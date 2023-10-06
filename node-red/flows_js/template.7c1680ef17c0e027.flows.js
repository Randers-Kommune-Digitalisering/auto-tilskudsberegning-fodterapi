const Node = {
  "id": "7c1680ef17c0e027",
  "type": "template",
  "z": "f99fd88fa65c74b9",
  "name": "",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 500,
  "y": 4040,
  "wires": [
    [
      "0230bd822b7f09e2"
    ]
  ],
  "_order": 1000
}

Node.template = `
DROP TABLE receipts
`

module.exports = Node;