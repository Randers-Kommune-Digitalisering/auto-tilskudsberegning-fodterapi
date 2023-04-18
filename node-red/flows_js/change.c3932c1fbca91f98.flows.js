const Node = {
  "id": "c3932c1fbca91f98",
  "type": "change",
  "z": "8ea344595d9a442a",
  "name": "Set userName in runHistory",
  "rules": [
    {
      "t": "set",
      "p": "brugernavn",
      "pt": "msg",
      "to": "(((brugernavn ~> $split(\":\"))[1]) ~> $split(\"/\"))[0]",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "currentRun.userName",
      "pt": "msg",
      "to": "brugernavn",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "runHistory",
      "pt": "msg",
      "to": "$.runHistory~> |$|(\t\t$startDate := currentRun.startDate;\t$endDate := currentRun.endDate;\t$userName := $$.brugernavn;\t\t/*startDate = $startDate and endDate = $endDate ?*/\t{\t\t    \"userName\": $userName\t    \t}\t\t)|",
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
  "x": 1660,
  "y": 820,
  "wires": [
    [
      "19bdc53204115899",
      "763d5d3a56706a02"
    ]
  ],
  "_order": 316
}

module.exports = Node;