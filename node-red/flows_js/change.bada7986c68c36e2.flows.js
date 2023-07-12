const Node = {
  "id": "bada7986c68c36e2",
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
  "y": 860,
  "wires": [
    [
      "9cea483dce20d028"
    ]
  ],
  "_order": 636
}

module.exports = Node;