const Node = {
  "id": "432aba0662ddfb35",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "8a22ca77a7e171eb",
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
  "x": 1500,
  "y": 520,
  "wires": [
    [
      "fbd5f0365a2d3302"
    ]
  ],
  "_order": 766
}

module.exports = Node;