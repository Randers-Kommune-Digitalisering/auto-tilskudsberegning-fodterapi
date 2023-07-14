const Node = {
  "id": "eb63c0f501ef35f7",
  "type": "change",
  "z": "fd98a6615193936d",
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
  "x": 1040,
  "y": 840,
  "wires": [
    [
      "b356e3fa74bbcf82"
    ]
  ],
  "_order": 361
}

module.exports = Node;