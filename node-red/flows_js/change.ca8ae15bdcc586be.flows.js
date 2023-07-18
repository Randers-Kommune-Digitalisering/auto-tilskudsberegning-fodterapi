const Node = {
  "id": "ca8ae15bdcc586be",
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
  "y": 2340,
  "wires": [
    [
      "767c5a366f74e240"
    ]
  ],
  "_order": 943
}

module.exports = Node;