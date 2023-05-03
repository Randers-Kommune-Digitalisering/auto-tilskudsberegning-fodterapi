const Node = {
  "id": "fbeec8791e401f92",
  "type": "change",
  "z": "85ff29bdef7c1aea",
  "name": "Add step run history",
  "rules": [
    {
      "t": "set",
      "p": "currentStartDate",
      "pt": "msg",
      "to": "currentStartDate",
      "tot": "global",
      "dc": true
    },
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
      "p": "newStep",
      "pt": "msg",
      "to": "payload.webSteps[title = \"extract-worklet\"]",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "newStep",
      "pt": "msg",
      "to": "newStep",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "set",
      "p": "newState",
      "pt": "msg",
      "to": "payload.webStates[title = \"idle\"]",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "newState",
      "pt": "msg",
      "to": "newState",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "set",
      "p": "newState.result",
      "pt": "msg",
      "to": "newState.result[1]",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "newStep.state",
      "pt": "msg",
      "to": "newState",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "set",
      "p": "newStep.timestamp",
      "pt": "msg",
      "to": "$millis()",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "newStep.lastResult",
      "pt": "msg",
      "to": "newStep.state.result",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "set",
      "p": "runHistory",
      "pt": "msg",
      "to": "$.runHistory~> |$|(\t\t$startDate := $$.currentStartDate;\t$newStep := $$.newStep;\t\tstartDate = $startDate?\t{\t    \"currentStep\": $newStep,\t    \"stepHistory\": $append(stepHistory, $newStep)\t}\t\t)|",
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
  "x": 1360,
  "y": 120,
  "wires": [
    [
      "f5d7b1d2cde30ea2"
    ]
  ],
  "_order": 111
}

module.exports = Node;