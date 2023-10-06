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
  "x": 500,
  "y": 3900,
  "wires": [
    [
      "d31a8798c093ed42"
    ]
  ],
  "_order": 990
}

Node.template = `
SELECT * FROM receipts
`

module.exports = Node;