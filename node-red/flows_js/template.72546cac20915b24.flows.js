const Node = {
  "id": "72546cac20915b24",
  "type": "template",
  "z": "f99fd88fa65c74b9",
  "name": "Forespørgsel ↓\\n Opret ny kørsel",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 480,
  "y": 800,
  "wires": [
    [
      "52221fcdcd45c9a9"
    ]
  ],
  "_order": 664
}

Node.template = `
INSERT INTO runHistory (startDate, endDate, userStartedRun)
VALUES ('{{{newRun.startDate}}}', '{{{newRun.endDate}}}', '{{{newRun.dqUser}}}');
`

module.exports = Node;