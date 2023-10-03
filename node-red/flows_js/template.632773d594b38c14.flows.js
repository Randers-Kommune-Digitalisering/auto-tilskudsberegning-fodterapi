const Node = {
  "id": "632773d594b38c14",
  "type": "template",
  "z": "f99fd88fa65c74b9",
  "name": "",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 760,
  "y": 4160,
  "wires": [
    []
  ],
  "_order": 954
}

Node.template = `
SELECT * FROM runHistory
`

module.exports = Node;