const Node = {
  "id": "2b21c9b83fc68598",
  "type": "template",
  "z": "f99fd88fa65c74b9",
  "name": "Forespørgsel ↓\\n Læs {{tablename}}",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 650,
  "y": 4300,
  "wires": [
    [
      "ccc3a28dcd90abc8"
    ]
  ],
  "_order": 1024
}

Node.template = `
SELECT * FROM {{tablename}}
`

module.exports = Node;