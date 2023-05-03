const Node = {
  "id": "6154c5e7bbc8bc1a",
  "type": "change",
  "z": "c28a486ea3e09387",
  "g": "31b5ea0c53a9c4fb",
  "name": "Set response",
  "rules": [
    {
      "t": "set",
      "p": "payload.page",
      "pt": "msg",
      "to": "payload.pageToAccept",
      "tot": "msg"
    },
    {
      "t": "delete",
      "p": "payload.grantChanges",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "payload.toAccept",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "payload.pageToAccept",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1590,
  "y": 820,
  "wires": [
    [
      "e7b83f0e755d4fdf"
    ]
  ],
  "_order": 426
}

module.exports = Node;