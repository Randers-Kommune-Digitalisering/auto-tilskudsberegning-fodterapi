const Node = {
  "id": "c5efddc3555e6c32",
  "type": "change",
  "z": "fd98a6615193936d",
  "d": true,
  "g": "96979e6dfb4c6dd8",
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
      "to": "runHistory SELECT last entry query",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "stdout.succes",
      "pt": "msg",
      "to": "error ~> $exists() ? false : true",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "stdout.message",
      "pt": "msg",
      "to": "$count(payload) > 0  ? \t    \"Run entry found\" :\t    \"No run entry found\"",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "stdout.finalized",
      "pt": "msg",
      "to": "$count(payload) > 0  ?\t(payload[0].isFinalized = 1 ? true : false)",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "stdout.startdate",
      "pt": "msg",
      "to": "$count(payload) > 0  ?\t($split(payload[0].startDate ~> $string, 'T'))[0] ~> $replace('\"', '')",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "payload.endDate",
      "pt": "msg",
      "to": "$count(payload) > 0  ?\t($split(payload[0].endDate ~> $string, 'T'))[0] ~> $replace('\"', '')",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "stdout.error",
      "pt": "msg",
      "to": "error ~> $exists() ? error.message",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 800,
  "y": 860,
  "wires": [
    [
      "b69a4cfbb8e39c0e"
    ]
  ],
  "_order": 403
}

module.exports = Node;