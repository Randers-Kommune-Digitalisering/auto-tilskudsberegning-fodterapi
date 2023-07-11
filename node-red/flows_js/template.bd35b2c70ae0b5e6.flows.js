const Node = {
  "id": "bd35b2c70ae0b5e6",
  "type": "template",
  "z": "f99fd88fa65c74b9",
  "name": "Forespørgsel ↓\\n Slet eksisterende tabel ved deploy",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 460,
  "y": 300,
  "wires": [
    [
      "5298b18f1a031c6e"
    ]
  ],
  "_order": 600
}

Node.template = `
DROP TABLE IF EXISTS {{tablename}}
`

module.exports = Node;