const Node = {
  "id": "26a2926ef784cadb",
  "type": "change",
  "z": "fd98a6615193936d",
  "name": "Rens svar + \\n Flyt UID til newRun",
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
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 990,
  "y": 1560,
  "wires": [
    [
      "2d8030ce2a820381"
    ]
  ],
  "_order": 346
}

module.exports = Node;