const Node = {
  "id": "d82ec2b88042626f",
  "type": "change",
  "z": "8ea344595d9a442a",
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
  "x": 840,
  "y": 1500,
  "wires": [
    []
  ],
  "_order": 429
}

module.exports = Node;