const Node = {
  "id": "d7a64a896d5baa55",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "dcb33bd7556b5033",
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
  "x": 700,
  "y": 940,
  "wires": [
    [
      "895eca1d8e0c5c47"
    ]
  ],
  "_order": 438
}

module.exports = Node;