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
      "bfb0caf1b6291793"
    ]
  ],
  "_order": 412
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