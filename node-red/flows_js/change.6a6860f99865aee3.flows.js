const Node = {
  "id": "6a6860f99865aee3",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "0644ae6c3d5c62e8",
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
  "x": 700,
  "y": 3640,
  "wires": [
    [
      "12b427e8e67ad28b"
    ]
  ],
  "_order": 880
}

module.exports = Node;