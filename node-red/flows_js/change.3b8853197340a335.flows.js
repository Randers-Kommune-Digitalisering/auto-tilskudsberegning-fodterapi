const Node = {
  "id": "3b8853197340a335",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "7259557bf9adb316",
  "name": "Genopret msg data fra flow vars",
  "rules": [
    {
      "t": "move",
      "p": "citizenReceiptData",
      "pt": "flow",
      "to": "payload",
      "tot": "msg"
    },
    {
      "t": "move",
      "p": "errorList",
      "pt": "flow",
      "to": "errorList",
      "tot": "msg"
    },
    {
      "t": "delete",
      "p": "ruleEngineData",
      "pt": "flow"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1610,
  "y": 2360,
  "wires": [
    [
      "3b3f7f6304da71bd"
    ]
  ],
  "_order": 946
}

module.exports = Node;