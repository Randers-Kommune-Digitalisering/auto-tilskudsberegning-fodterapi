const Node = {
  "id": "72546cac20915b24",
  "type": "template",
  "z": "f99fd88fa65c74b9",
  "name": "Forespørgsel ↓\\n Opret ny kørsel",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 480,
  "y": 700,
  "wires": [
    []
  ],
  "_order": 663
}

Node.template = `
INSERT INTO runHistory
`

module.exports = Node;