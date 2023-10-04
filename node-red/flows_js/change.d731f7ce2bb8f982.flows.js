const Node = {
  "id": "d731f7ce2bb8f982",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "1539caa428ddf723",
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
      "to": "Fakturaer downloaded",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "stdout.succes",
      "pt": "msg",
      "to": "true",
      "tot": "bool"
    },
    {
      "t": "set",
      "p": "stdout.count",
      "pt": "msg",
      "to": "receipts ~> $count",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1540,
  "y": 820,
  "wires": [
    [
      "9d6b9447caab3986"
    ]
  ],
  "_order": 663
}

module.exports = Node;