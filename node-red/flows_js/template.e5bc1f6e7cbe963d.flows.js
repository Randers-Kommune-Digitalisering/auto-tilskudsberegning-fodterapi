const Node = {
  "id": "e5bc1f6e7cbe963d",
  "type": "template",
  "z": "5bb3204aef17c104",
  "g": "63492761a85db852",
  "name": "Forespørgsel ↓\\n Sæt faktura som behandlet",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 920,
  "y": 1500,
  "wires": [
    [
      "6580c205c92d1119"
    ]
  ],
  "_order": 846
}

Node.template = `
UPDATE {{tablename}} SET isProcessed = 1 WHERE uid = '{{receiptId}}'
`

module.exports = Node;