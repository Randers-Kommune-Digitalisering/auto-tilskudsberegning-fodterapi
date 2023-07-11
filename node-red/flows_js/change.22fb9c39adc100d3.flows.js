const Node = {
  "id": "22fb9c39adc100d3",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "784e03f201af8641",
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
  "x": 820,
  "y": 1500,
  "wires": [
    [
      "aaaa3ec0799ab3ee"
    ]
  ],
  "_order": 461
}

module.exports = Node;