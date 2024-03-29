const Node = {
  "id": "9ce20ec163b09587",
  "type": "template",
  "z": "f99fd88fa65c74b9",
  "g": "4cee0915c35f0e36",
  "name": "Forespørgsel ↓\\n Indsæt fakturaer",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 720,
  "y": 3960,
  "wires": [
    [
      "786b0c46ea500270"
    ]
  ]
}

Node.template = `
INSERT IGNORE INTO {{tablename}} (uid, runUid, userProcessed) VALUES {{{queryValues}}};
`

module.exports = Node;