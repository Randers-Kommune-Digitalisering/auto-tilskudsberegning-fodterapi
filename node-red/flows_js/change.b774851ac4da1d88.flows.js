const Node = {
  "id": "b774851ac4da1d88",
  "type": "change",
  "z": "fd98a6615193936d",
  "g": "c9499957e45fd066",
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
      "to": "runHistory INSERT query",
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
      "p": "stdout.error",
      "pt": "msg",
      "to": "error ~> $exists() ? error.message",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "stdout.startdate",
      "pt": "msg",
      "to": "newRun.startDate",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "set",
      "p": "stdout.enddate",
      "pt": "msg",
      "to": "newRun.endDate",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "set",
      "p": "stdout.dquser",
      "pt": "msg",
      "to": "newRun.dqUser",
      "tot": "msg",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 780,
  "y": 1360,
  "wires": [
    [
      "491b41b3e63c7795"
    ]
  ],
  "_order": 403
}

module.exports = Node;