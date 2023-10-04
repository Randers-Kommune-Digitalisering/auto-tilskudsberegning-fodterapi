const Node = {
  "id": "21beda132648a953",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "7259557bf9adb316",
  "name": "Flyt data fra msg til flow vars",
  "rules": [
    {
      "t": "move",
      "p": "payload",
      "pt": "msg",
      "to": "citizenReceiptData",
      "tot": "flow"
    },
    {
      "t": "move",
      "p": "data",
      "pt": "msg",
      "to": "ruleEngineData",
      "tot": "flow"
    },
    {
      "t": "move",
      "p": "rules",
      "pt": "msg",
      "to": "payload",
      "tot": "msg"
    },
    {
      "t": "move",
      "p": "errorList",
      "pt": "msg",
      "to": "errorList",
      "tot": "flow"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 600,
  "y": 2480,
  "wires": [
    [
      "5b3e4a67258b56fe"
    ]
  ],
  "_order": 910
}

module.exports = Node;