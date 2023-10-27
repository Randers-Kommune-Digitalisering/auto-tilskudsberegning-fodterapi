const Node = {
  "id": "938db90da2b0ab5a",
  "type": "template",
  "z": "5bb3204aef17c104",
  "name": "Forespørgsel ↓\\n Findes kørselshistorik?",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 680,
  "y": 1960,
  "wires": [
    [
      "56295dfa516dd1fb"
    ]
  ],
  "_order": 707
}

Node.template = `
SHOW TABLES LIKE '{{tablename}}';
`

module.exports = Node;