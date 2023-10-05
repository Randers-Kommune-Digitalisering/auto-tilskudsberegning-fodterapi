const Node = {
  "id": "27c948d1a5ac91b0",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "477f38e4ec8ec3bd",
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
      "to": "archive",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "stdout.action",
      "pt": "msg",
      "to": "Alle fakturaer bekræftet",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "stdout.total_count",
      "pt": "msg",
      "to": "currentRun.processedReceipts.length",
      "tot": "msg",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1260,
  "y": 3260,
  "wires": [
    [
      "4fe0cd9d6b6dbfb5"
    ]
  ],
  "_order": 707
}

module.exports = Node;