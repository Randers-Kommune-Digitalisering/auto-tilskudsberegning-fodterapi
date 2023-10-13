const Node = {
  "id": "503d20902845accb",
  "type": "change",
  "z": "fd98a6615193936d",
  "name": "Rens svar + Flyt behandlede \\n fakturaer til processedReceipts",
  "rules": [
    {
      "t": "delete",
      "p": "error",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "sql",
      "pt": "msg"
    },
    {
      "t": "set",
      "p": "newRun.processedReceipts",
      "pt": "msg",
      "to": "[] ~> $append( payload[isProcessed = 1].uid )",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1410,
  "y": 1800,
  "wires": [
    [
      "e7436aa6e279a5c3"
    ]
  ],
  "_order": 487
}

module.exports = Node;