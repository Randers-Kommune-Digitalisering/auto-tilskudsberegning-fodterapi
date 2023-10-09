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
      "b3233a620b45345c"
    ]
  ],
  "_order": 421
}

Node.template = `
SELECT * FROM {{tablename}} ORDER BY {{orderby}} {{order}} LIMIT 1
`

module.exports = Node;