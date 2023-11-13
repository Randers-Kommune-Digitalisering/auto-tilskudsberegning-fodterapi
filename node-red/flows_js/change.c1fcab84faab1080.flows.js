const Node = {
  "id": "c1fcab84faab1080",
  "type": "change",
  "z": "6f0ff2a58c316519",
  "name": "Hent tilskudsinfo",
  "rules": [
    {
      "t": "set",
      "p": "tilskudsInfo",
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
  "x": 440,
  "y": 160,
  "wires": [
    [
      "dd226f5e05407cf6"
    ]
  ],
  "_order": 390
}

module.exports = Node;