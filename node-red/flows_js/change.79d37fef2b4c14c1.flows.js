const Node = {
  "id": "79d37fef2b4c14c1",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "name": "Set retry config",
  "rules": [
    {
      "t": "set",
      "p": "config",
      "pt": "msg",
      "to": "config ? config : {}",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "config.retryAttempts",
      "pt": "msg",
      "to": "2",
      "tot": "num"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 960,
  "y": 560,
  "wires": [
    [
      "70d81c1b41dbe839"
    ]
  ],
  "_order": 631
}

module.exports = Node;