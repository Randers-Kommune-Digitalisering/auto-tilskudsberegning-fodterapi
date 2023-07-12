const Node = {
  "id": "daab003351c8502c",
  "type": "template",
  "z": "f99fd88fa65c74b9",
  "name": "Forespørgsel ↓\\n Opret tabel til faktura-ID'er",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 260,
  "y": 580,
  "wires": [
    [
      "7639627758e90548"
    ]
  ],
  "_order": 606
}

Node.template = `
CREATE TABLE IF NOT EXISTS receipts (
    uid VARCHAR(255) NOT NULL,
    runUid INT NOT NULL,
    lastUpdated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    isProcessed BOOL DEFAULT false,
    userProcessed VARCHAR(255),
    PRIMARY KEY (uid)
);
`

module.exports = Node;