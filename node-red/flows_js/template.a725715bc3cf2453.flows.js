const Node = {
  "id": "a725715bc3cf2453",
  "type": "template",
  "z": "fd98a6615193936d",
  "name": "Forespørgsel ↓\\n Opret tabel til kørselshistorik",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 520,
  "y": 180,
  "wires": [
    [
      "85b3eea77617597b"
    ]
  ],
  "_order": 452
}

Node.template = `
CREATE TABLE IF NOT EXISTS {{{tablename}}} (
    uid int NOT NULL AUTO_INCREMENT,
    runStarted TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    lastUpdated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    startDate DATE,
    endDate DATE,
    runFinalized BOOL DEFAULT false,
    userStartedRun VARCHAR(255),
    PRIMARY KEY (uid)
);
`

module.exports = Node;