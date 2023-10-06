const Node = {
  "id": "53f1081bc1f81d90",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "9c4f3569ebca5f7b",
  "name": "KP Login \\n + Opdater runHistory",
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
      "t": "set",
      "p": "currentRun.allReceiptsProcessed",
      "pt": "msg",
      "to": "false",
      "tot": "bool"
    },
    {
      "t": "set",
      "p": "runHistory",
      "pt": "msg",
      "to": "$.runHistory~> |$|(\t\t$startDate := $$.currentRun.startDate;\t$endDate := $$.currentRun.endDate;\t\tstartDate = $startDate and endDate = $endDate ?\t{\t    \"dqUser\": ($globalContext(\"webData\")).dqCreds.dqUser\t}\t\t)|",
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
      "p": "dqUser",
      "pt": "msg",
      "to": "webData.dqCreds.dqUser",
      "tot": "global",
      "dc": true
    },
    {
      "t": "set",
      "p": "dqPass",
      "pt": "msg",
      "to": "webData.dqCreds.dqPass",
      "tot": "global",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 740,
  "y": 1340,
  "wires": [
    [
      "c2df29c07624e5e0"
    ]
  ],
  "_order": 725
}

module.exports = Node;