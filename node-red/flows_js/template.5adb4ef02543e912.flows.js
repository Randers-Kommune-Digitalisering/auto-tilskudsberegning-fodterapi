const Node = {
  "id": "5adb4ef02543e912",
  "type": "template",
  "z": "fd98a6615193936d",
  "name": "Forespørgsel ↓\\n Opret tabel til faktura-ID'er",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 520,
  "y": 480,
  "wires": [
    [
      "f3278d07c2a2c0d4"
    ]
  ],
  "_order": 401
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