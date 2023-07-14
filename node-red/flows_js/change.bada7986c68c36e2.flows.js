const Node = {
  "id": "bada7986c68c36e2",
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
  "y": 480,
  "wires": [
    [
      "9cea483dce20d028"
    ]
  ],
  "_order": 326
}

module.exports = Node;