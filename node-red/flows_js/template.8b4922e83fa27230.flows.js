const Node = {
  "id": "8b4922e83fa27230",
  "type": "template",
  "z": "f99fd88fa65c74b9",
  "name": "",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 460,
  "y": 3920,
  "wires": [
    [
      "d31a8798c093ed42"
    ]
  ],
  "_order": 974
}

Node.template = `
SELECT * FROM receipts
`

module.exports = Node;