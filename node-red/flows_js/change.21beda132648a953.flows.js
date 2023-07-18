const Node = {
  "id": "21beda132648a953",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "name": "Forbered split -> flyt lister",
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
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 650,
  "y": 2460,
  "wires": [
    [
      "5b3e4a67258b56fe"
    ]
  ],
  "_order": 949
}

module.exports = Node;