const Node = {
  "id": "dbc2551841127d3c",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "1b73f9f4c84a921d",
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
      "to": "extract_worklet",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "stdout.action",
      "pt": "msg",
      "to": "Fakturaer download fejl",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "stdout.succes",
      "pt": "msg",
      "to": "false",
      "tot": "bool"
    },
    {
      "t": "set",
      "p": "stdout.count",
      "pt": "msg",
      "to": "workletRetryCount",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1060,
  "y": 980,
  "wires": [
    [
      "bee0b738d69edf2a"
    ]
  ],
  "_order": 453
}

module.exports = Node;