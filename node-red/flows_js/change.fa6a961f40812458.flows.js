const Node = {
  "id": "fa6a961f40812458",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "name": "Flyt regel til payload.rules",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{ \"rules\": payload }",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 990,
  "y": 2460,
  "wires": [
    [
      "1d24afdf200e3359"
    ]
  ],
  "_order": 951
}

module.exports = Node;