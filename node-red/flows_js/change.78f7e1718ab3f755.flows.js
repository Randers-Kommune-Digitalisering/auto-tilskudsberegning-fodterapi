const Node = {
  "id": "78f7e1718ab3f755",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "380e5c7e0ea3778b",
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
      "p": "#:(storeInFile)::runHistory",
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
  "x": 970,
  "y": 2220,
  "wires": [
    [
      "4840de2e1aa54398"
    ]
  ],
  "_order": 320
}

module.exports = Node;