const Node = {
  "id": "405c756777b7fe27",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "669e09e244099963",
  "name": "workletRetryCount +1",
  "rules": [
    {
      "t": "set",
      "p": "workletRetryCount",
      "pt": "msg",
      "to": "workletRetryCount+1",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 860,
  "y": 880,
  "wires": [
    [
      "88dc6a55a45a4048"
    ]
  ],
  "_order": 638
}

module.exports = Node;