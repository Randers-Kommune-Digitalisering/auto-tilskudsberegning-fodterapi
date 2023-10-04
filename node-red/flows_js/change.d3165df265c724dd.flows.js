const Node = {
  "id": "d3165df265c724dd",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "dcf0bfca32bf2ffa",
  "name": "Set stdout",
  "rules": [
    {
      "t": "set",
      "p": "stdout",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "stdout.timestamp",
      "pt": "msg",
      "to": "",
      "tot": "date"
    },
    {
      "t": "set",
      "p": "stdout.phase",
      "pt": "msg",
      "to": "initialize",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "stdout.action",
      "pt": "msg",
      "to": "currentRun.isFinalized ?\t    \"Skab kørsel\"\t:   \"Genoptag kørsel\"",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "stdout.startdate",
      "pt": "msg",
      "to": "currentRun.startDate",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "set",
      "p": "stdout.enddate",
      "pt": "msg",
      "to": "currentRun.endDate",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "set",
      "p": "stdout.succes",
      "pt": "msg",
      "to": "true",
      "tot": "bool"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1500,
  "y": 480,
  "wires": [
    [
      "4057cf82e6442f23"
    ]
  ],
  "_order": 675
}

module.exports = Node;