const Node = {
  "id": "72afce271d46b8f9",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "59d040b48f8f3dda",
  "name": "set isFinalized = true",
  "rules": [
    {
      "t": "set",
      "p": "currentRun.isFinalized",
      "pt": "msg",
      "to": "true",
      "tot": "bool"
    },
    {
      "t": "set",
      "p": "runHistory",
      "pt": "msg",
      "to": "$.runHistory~> |$|(\t\t$startDate := currentRun.startDate;\t$endDate := currentRun.endDate;\t\tstartDate = $startDate and endDate = $endDate ?\t{\t\t    \"isFinalized\": true\t    \t}\t\t)|",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "#:(storeInFile)::runHistory",
      "pt": "global",
      "to": "runHistory",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "set",
      "p": "webSettings.state.isRunning",
      "pt": "global",
      "to": "false",
      "tot": "bool"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 820,
  "y": 2960,
  "wires": [
    [
      "25f140a78f720950"
    ]
  ],
  "_order": 289
}

module.exports = Node;