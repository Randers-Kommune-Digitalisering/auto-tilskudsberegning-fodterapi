const Node = {
  "id": "8b4922e83fa27230",
  "type": "template",
  "z": "f99fd88fa65c74b9",
  "d": true,
  "name": "",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 380,
  "y": 4480,
  "wires": [
    [
      "d31a8798c093ed42"
    ]
  ],
  "_order": 917
}

Node.template = `
SELECT * FROM receipts
`

module.exports = Node;