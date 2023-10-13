const Node = {
  "id": "83bd03807a324f77",
  "type": "template",
  "z": "f99fd88fa65c74b9",
  "name": "Forespørgsel ↓\\n Find fakturaer",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 700,
  "y": 4540,
  "wires": [
    [
      "b31d07a20f760122"
    ]
  ],
  "_order": 988
}

Node.template = `
SELECT * FROM {{tablename}} WHERE runUid = {{runUid}}
`

module.exports = Node;