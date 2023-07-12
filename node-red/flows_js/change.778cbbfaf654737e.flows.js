const Node = {
  "id": "778cbbfaf654737e",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "name": "Hent DQ bruger",
  "rules": [
    {
      "t": "set",
      "p": "newRun.dqUser",
      "pt": "msg",
      "to": "webSettings.dqCreds.dqUser",
      "tot": "global",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 240,
  "y": 800,
  "wires": [
    [
      "72546cac20915b24"
    ]
  ],
  "_order": 675
}

module.exports = Node;