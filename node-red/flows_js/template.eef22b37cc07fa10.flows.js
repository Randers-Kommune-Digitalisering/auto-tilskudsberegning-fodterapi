const Node = {
  "id": "eef22b37cc07fa10",
  "type": "template",
  "z": "f99fd88fa65c74b9",
  "name": "Forespørgsel ↓\\n Sæt faktura som behandlet",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 680,
  "y": 4140,
  "wires": [
    [
      "a965f3f07c1bdff0"
    ]
  ],
  "_order": 941
}

Node.template = `
UPDATE {{tablename}} SET runFinalized = 1 WHERE uid = '{{runId}}'
`

module.exports = Node;