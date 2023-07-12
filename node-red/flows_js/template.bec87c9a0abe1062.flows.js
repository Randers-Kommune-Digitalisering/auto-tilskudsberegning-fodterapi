const Node = {
  "id": "bec87c9a0abe1062",
  "type": "template",
  "z": "f99fd88fa65c74b9",
  "name": "Forespørgsel ↓\\n Opret tabel til kørselshistorik",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 420,
  "y": 500,
  "wires": [
    [
      "e0b84cc4d249697c"
    ]
  ],
  "_order": 610
}

Node.template = `
CREATE TABLE IF NOT EXISTS {{{tablename}}} (
    uid int NOT NULL AUTO_INCREMENT,
    runStarted TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    lastUpdated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    startDate DATE,
    endDate DATE,
    allReceiptsProcessed BOOL DEFAULT false,
    runFinalized BOOL DEFAULT false,
    userStartedRun VARCHAR(255),
    PRIMARY KEY (uid)
);
`

module.exports = Node;