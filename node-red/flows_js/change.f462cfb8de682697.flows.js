const Node = {
  "id": "f462cfb8de682697",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "13424c114a577170",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "runHistory",
      "pt": "msg",
      "to": "runHistory",
      "tot": "global",
      "dc": true
    },
    {
      "t": "delete",
      "p": "payload",
      "pt": "msg"
    },
    {
      "t": "set",
      "p": "#:(storeInFile)::webSettings.state.isRunning",
      "pt": "global",
      "to": "false",
      "tot": "bool"
    },
    {
      "t": "set",
      "p": "currentRun.allReceiptsProcessed",
      "pt": "msg",
      "to": "true",
      "tot": "bool"
    },
    {
      "t": "set",
      "p": "runHistory",
      "pt": "msg",
      "to": "$.runHistory~> |$|(\t\t$startDate := $$.currentRun.startDate;\t$endDate := $$.currentRun.endDate;\t\tstartDate = $startDate and endDate = $endDate ?\t{\t    \"allReceiptsProcessed\": true, \"isFinalized\": false\t}\t\t)|",
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
  "x": 115,
  "y": 1060,
  "wires": [
    [
      "42e8d0e6b5e55314",
      "d0db0a27f5e322ae"
    ]
  ],
  "l": false,
  "_order": 332
}

module.exports = Node;