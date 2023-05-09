const Node = {
  "id": "d82ec2b88042626f",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "9c4f3569ebca5f7b",
  "name": "KP login",
  "rules": [
    {
      "t": "set",
      "p": "dqUser",
      "pt": "msg",
      "to": "webData.dqCreds.dqUser",
      "tot": "global",
      "dc": true
    },
    {
      "t": "set",
      "p": "dqPass",
      "pt": "msg",
      "to": "webData.dqCreds.dqPass",
      "tot": "global",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 880,
  "y": 880,
  "wires": [
    [
      "c2df29c07624e5e0"
    ]
  ],
  "_order": 389
}

module.exports = Node;