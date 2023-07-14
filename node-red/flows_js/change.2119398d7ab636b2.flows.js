const Node = {
  "id": "2119398d7ab636b2",
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
  "y": 240,
  "wires": [
    [
      "725c85fb10a8e3be"
    ]
  ],
  "_order": 415
}

module.exports = Node;