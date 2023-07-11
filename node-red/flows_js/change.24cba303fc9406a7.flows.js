const Node = {
  "id": "24cba303fc9406a7",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "984bd8c1abc9a73a",
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
      "to": "Faktura bekræftet",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "stdout.uid",
      "pt": "msg",
      "to": "tempData",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "set",
      "p": "stdout.count",
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
  "x": 380,
  "y": 3460,
  "wires": [
    [
      "485c1065f84ffbcc"
    ]
  ],
  "_order": 466
}

module.exports = Node;