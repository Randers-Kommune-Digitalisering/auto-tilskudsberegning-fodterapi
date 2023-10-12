const Node = {
  "id": "26a2926ef784cadb",
  "type": "change",
  "z": "fd98a6615193936d",
  "name": "Rens svar \\n + Flyt newRun til payload",
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
      "p": "newRun.uid",
      "pt": "msg",
      "to": "payload[0].uid",
      "tot": "msg"
    },
    {
      "t": "move",
      "p": "newRun",
      "pt": "msg",
      "to": "payload",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1110,
  "y": 1620,
  "wires": [
    [
      "455e646ca4bf89e7"
    ]
  ],
  "_order": 479
}

module.exports = Node;