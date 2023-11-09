const Node = {
  "id": "714312a81b4df8ff",
  "type": "template",
  "z": "d5ad1717f0162041",
  "name": "Forespørgsel ↓\\n Sæt kørsel som afsluttet",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 670,
  "y": 100,
  "wires": [
    [
      "be9981ac6599d480"
    ]
  ],
  "_order": 426
}

Node.template = `
UPDATE {{tablename}} SET runFinalized = 1 WHERE uid = {{runId}}
`

module.exports = Node;