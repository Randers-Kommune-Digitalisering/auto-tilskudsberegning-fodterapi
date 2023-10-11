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
  "x": 570,
  "y": 1620,
  "wires": [
    [
      "7f10b6d631775b09"
    ]
  ],
  "_order": 471
}

Node.template = `
SELECT uid FROM {{tablename}} ORDER BY {{orderby}} {{order}} LIMIT 1
`

module.exports = Node;