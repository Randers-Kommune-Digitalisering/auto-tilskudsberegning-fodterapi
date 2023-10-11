const Node = {
  "id": "85df5b12ec7c7fef",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "2596ee684f308aa9",
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
      "p": "stdout.attempt",
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
  "x": 1140,
  "y": 1040,
  "wires": [
    [
      "6bb76aebd8036f0b"
    ]
  ],
  "_order": 793
}

module.exports = Node;