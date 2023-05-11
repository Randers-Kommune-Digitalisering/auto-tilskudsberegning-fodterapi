const Node = {
  "id": "fb02e28cd75e69e8",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "954337fe9fd2e7cc",
  "name": "Set allReceiptsProcessed = true",
  "rules": [
    {
      "t": "set",
      "p": "runHistory",
      "pt": "msg",
      "to": "$.runHistory~> |$|(\t\t$startDate := $$.currentRun.startDate;\t$endDate := $$.currentRun.endDate;\t\tstartDate = $startDate and endDate = $endDate ?\t{\t    \"allReceiptsProcessed\": true\t}\t\t)|",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "runHistory",
      "pt": "global",
      "to": "runHistory",
      "tot": "msg",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 890,
  "y": 3300,
  "wires": [
    [
      "b840a64a9cf3c187"
    ]
  ],
  "_order": 274
}

module.exports = Node;