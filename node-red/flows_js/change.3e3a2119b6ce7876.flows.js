const Node = {
  "id": "3e3a2119b6ce7876",
  "type": "change",
  "z": "5bb3204aef17c104",
  "name": "Set PEM as response",
  "rules": [
    {
      "t": "set",
      "p": "payload.data.pem",
      "pt": "msg",
      "to": "publicPem",
      "tot": "flow",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 460,
  "y": 1840,
  "wires": [
    [
      "08bcab4b9d4c1cd1"
    ]
  ],
  "_order": 682
}

module.exports = Node;