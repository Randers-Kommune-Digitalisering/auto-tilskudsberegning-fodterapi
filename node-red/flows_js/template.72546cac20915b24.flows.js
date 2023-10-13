const Node = {
  "id": "72546cac20915b24",
  "type": "template",
  "z": "fd98a6615193936d",
  "name": "Forespørgsel ↓\\n Opret ny kørsel",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 440,
  "y": 1320,
  "wires": [
    [
      "95f19f66d2be42f5"
    ]
  ],
  "_order": 442
}

Node.template = `
INSERT INTO runHistory (startDate, endDate, userStartedRun)
VALUES ('{{{newRun.startDate}}}', '{{{newRun.endDate}}}', '{{newRun.dqUser}}');
`

module.exports = Node;