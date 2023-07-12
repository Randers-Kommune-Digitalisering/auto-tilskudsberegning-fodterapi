const Node = {
  "id": "c35eb0158661ac41",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "topic",
      "pt": "msg",
      "to": "payload[0] ~> $exists() ? payload[0]",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 610,
  "y": 1320,
  "wires": [
    [
      "8b2a0098388ba501"
    ]
  ],
  "_order": 671
}

module.exports = Node;