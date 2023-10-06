const Node = {
  "id": "ab1b901746eee10d",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "5ae7113f16bba42b",
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
      "to": "extract_kp",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "stdout.action",
      "pt": "msg",
      "to": "Ingen fakturaer fundet",
      "tot": "str"
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
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 740,
  "y": 1600,
  "wires": [
    [
      "7854976b5bd1eae9"
    ]
  ],
  "_order": 903
}

module.exports = Node;