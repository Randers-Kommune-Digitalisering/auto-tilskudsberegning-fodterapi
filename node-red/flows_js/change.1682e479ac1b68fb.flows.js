const Node = {
  "id": "1682e479ac1b68fb",
  "type": "change",
  "z": "a1b347492c77827f",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "payload.workletUser",
      "pt": "msg",
      "to": "WORKLET_USER",
      "tot": "env"
    },
    {
      "t": "set",
      "p": "payload.workletPass",
      "pt": "msg",
      "to": "WORKLET_PASS",
      "tot": "env"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 560,
  "y": 600,
  "wires": [
    [
      "79a727c6b2c051d0"
    ]
  ],
  "_order": 501
}

module.exports = Node;