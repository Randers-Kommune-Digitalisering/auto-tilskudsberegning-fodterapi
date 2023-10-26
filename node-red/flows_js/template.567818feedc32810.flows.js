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
  "x": 690,
  "y": 1900,
  "wires": [
    [
      "1866c291de2e3ceb"
    ]
  ],
  "_order": 702
}

Node.template = `
SELECT * FROM {{tablename}} ORDER BY {{orderby}} {{order}} LIMIT {{limit}}
`

module.exports = Node;