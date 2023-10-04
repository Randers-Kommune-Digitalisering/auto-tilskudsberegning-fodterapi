const Node = {
  "id": "6c21cd1b6fdd2be5",
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
  "y": 3880,
  "wires": [
    [
      "d31a8798c093ed42"
    ]
  ],
  "_order": 924
}

Node.template = `
SELECT * FROM runHistory
`

module.exports = Node;