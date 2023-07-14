const Node = {
  "id": "daab003351c8502c",
  "type": "template",
  "z": "1260b784fb72ac25",
  "name": "Forespørgsel ↓\\n Opret tabel til faktura-ID'er",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 500,
  "y": 420,
  "wires": [
    [
      "7639627758e90548"
    ]
  ],
  "_order": 312
}

Node.template = `
CREATE TABLE IF NOT EXISTS {{{tablename}}} (
    uid VARCHAR(255) NOT NULL,
    runUid INT NOT NULL,
    lastUpdated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    isProcessed BOOL DEFAULT false,
    userProcessed VARCHAR(255),
    PRIMARY KEY (uid)
);
`

module.exports = Node;