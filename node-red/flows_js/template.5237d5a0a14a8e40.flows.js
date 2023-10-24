const Node = {
  "id": "5237d5a0a14a8e40",
  "type": "template",
  "z": "fd98a6615193936d",
  "name": "Forespørgsel ↓\\n Find fakturaer",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 860,
  "y": 1800,
  "wires": [
    [
      "d03d5d34383ff612"
    ]
  ],
  "_order": 338
}

Node.template = `
SELECT * FROM {{tablename}} WHERE runUid = {{runUid}}
`

module.exports = Node;