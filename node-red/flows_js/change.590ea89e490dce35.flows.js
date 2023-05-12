const Node = {
  "id": "590ea89e490dce35",
  "type": "change",
  "z": "db94b4c117de2f6a",
  "name": "Load grants",
  "rules": [
    {
      "t": "set",
      "p": "payload.grants",
      "pt": "msg",
      "to": "grants",
      "tot": "global",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 530,
  "y": 620,
  "wires": [
    [
      "12011e480eafdc8f"
    ]
  ],
  "_order": 137
}

module.exports = Node;