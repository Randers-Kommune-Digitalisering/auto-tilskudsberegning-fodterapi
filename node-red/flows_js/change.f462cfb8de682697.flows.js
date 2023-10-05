const Node = {
  "id": "f462cfb8de682697",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "c6c6bffeb57369e7",
  "name": "Opdater runHistory",
  "rules": [
    {
      "t": "set",
      "p": "runHistory",
      "pt": "msg",
      "to": "#:(storeInFile)::runHistory",
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
  "x": 390,
  "y": 1500,
  "wires": [
    [
      "42e8d0e6b5e55314",
      "d0db0a27f5e322ae"
    ]
  ],
  "_order": 599
}

module.exports = Node;