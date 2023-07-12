const Node = {
  "id": "adfac60207b7f97d",
  "type": "template",
  "z": "f99fd88fa65c74b9",
  "name": "Forespørgsel ↓\\n Find seneste kørsel",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 490,
  "y": 320,
  "wires": [
    [
      "e150e731ba93b80f"
    ]
  ],
  "_order": 656
}

Node.template = `
SELECT 1 FROM runHistory ORDER BY runStarted ASC
`

module.exports = Node;