const Node = {
  "id": "778cbbfaf654737e",
  "type": "change",
  "z": "fd98a6615193936d",
  "name": "Hent DQ bruger",
  "rules": [
    {
      "t": "set",
      "p": "newRun.dqUser",
      "pt": "msg",
      "to": "webData.dqCreds.dqUser",
      "tot": "global",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 180,
  "y": 1320,
  "wires": [
    [
      "72546cac20915b24"
    ]
  ],
  "_order": 299
}

module.exports = Node;