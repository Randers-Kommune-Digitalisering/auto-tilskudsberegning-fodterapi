const Node = {
  "id": "d28666b5d1eaa49e",
  "type": "template",
  "z": "fd98a6615193936d",
  "name": "Forespørgsel ↓\\n Find nyt kørsels-id",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 470,
  "y": 1560,
  "wires": [
    [
      "7f10b6d631775b09"
    ]
  ],
  "_order": 338
}

Node.template = `
SELECT uid FROM {{tablename}} ORDER BY {{orderby}} {{order}} LIMIT 1
`

module.exports = Node;