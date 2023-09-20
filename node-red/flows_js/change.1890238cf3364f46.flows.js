const Node = {
  "id": "1890238cf3364f46",
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
  "y": 540,
  "wires": [
    [
      "5f5f7f3915025ef4"
    ]
  ],
  "_order": 430
}

module.exports = Node;