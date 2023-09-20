const Node = {
  "id": "adfac60207b7f97d",
  "type": "template",
  "z": "fd98a6615193936d",
  "name": "Forespørgsel ↓\\n Find seneste kørsel",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 550,
  "y": 780,
  "wires": [
    [
      "e150e731ba93b80f"
    ]
  ],
  "_order": 388
}

Node.template = `
SELECT * FROM {{tablename}} ORDER BY {{orderby}} {{order}} LIMIT 1
`

module.exports = Node;