const Node = {
  "id": "aaa4dad83135b36b",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "fc85b3e30a744c28",
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
      "to": "finalize",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "stdout.action",
      "pt": "msg",
      "to": "Kørsel afsluttet",
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
    },
    {
      "t": "set",
      "p": "stdout.receipt_count",
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
  "x": 1860,
  "y": 2960,
  "wires": [
    [
      "95d4d4ba19d5fd09"
    ]
  ],
  "_order": 533
}

module.exports = Node;