const Node = {
  "id": "714312a81b4df8ff",
  "type": "template",
  "z": "5bb3204aef17c104",
  "name": "Forespørgsel ↓\\n Sæt kørsel som afsluttet",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 910,
  "y": 1660,
  "wires": [
    [
      "be9981ac6599d480"
    ]
  ],
  "_order": 1072
}

Node.template = `
UPDATE {{tablename}} SET runFinalized = 1 WHERE uid = {{runId}}
`

module.exports = Node;