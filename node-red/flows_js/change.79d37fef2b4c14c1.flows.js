const Node = {
  "id": "79d37fef2b4c14c1",
  "type": "change",
  "z": "1260b784fb72ac25",
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
  "x": 1020,
  "y": 180,
  "wires": [
    [
      "70d81c1b41dbe839"
    ]
  ],
  "_order": 321
}

module.exports = Node;