const Node = {
  "id": "b0485f8f92d2446e",
  "type": "change",
  "z": "db94b4c117de2f6a",
  "name": "Load rules",
  "rules": [
    {
      "t": "set",
      "p": "payload.rules",
      "pt": "msg",
      "to": "#:(storeInFile)::rules",
      "tot": "global",
      "dc": true
    },
    {
      "t": "set",
      "p": "payload.rulesStr",
      "pt": "msg",
      "to": "payload.rules",
      "tot": "msg",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 530,
  "y": 420,
  "wires": [
    [
      "c49b1da1d0ca8a62"
    ]
  ],
  "_order": 133
}

module.exports = Node;