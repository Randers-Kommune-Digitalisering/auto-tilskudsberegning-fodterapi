const Node = {
  "id": "abb73011a817205a",
  "type": "change",
  "z": "c28a486ea3e09387",
  "g": "31b5ea0c53a9c4fb",
  "name": "Set response",
  "rules": [
    {
      "t": "delete",
      "p": "payload.workletUser",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "payload.workletPass",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1590,
  "y": 500,
  "wires": [
    [
      "e7b83f0e755d4fdf"
    ]
  ],
  "_order": 415
}

module.exports = Node;