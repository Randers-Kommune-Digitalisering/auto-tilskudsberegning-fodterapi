const Node = {
  "id": "567818feedc32810",
  "type": "template",
  "z": "5bb3204aef17c104",
  "name": "Forespørgsel ↓\\n Find seneste kørsel",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 670,
  "y": 2080,
  "wires": [
    [
      "c634ed0c72c6e56b"
    ]
  ],
  "_order": 701
}

Node.template = `
SELECT * FROM {{tablename}} ORDER BY {{orderby}} {{order}} LIMIT {{limit}}
`

module.exports = Node;