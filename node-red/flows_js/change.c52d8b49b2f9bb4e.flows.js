const Node = {
  "id": "c52d8b49b2f9bb4e",
  "type": "change",
  "z": "fd98a6615193936d",
  "name": "Rens svar + \\n Sæt runFinalized = false",
  "rules": [
    {
      "t": "delete",
      "p": "error",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "sql",
      "pt": "msg"
    },
    {
      "t": "set",
      "p": "newRun.runFinalized",
      "pt": "msg",
      "to": "false",
      "tot": "bool"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1010,
  "y": 1320,
  "wires": [
    [
      "9656e49e15c33931"
    ]
  ],
  "_order": 315
}

module.exports = Node;