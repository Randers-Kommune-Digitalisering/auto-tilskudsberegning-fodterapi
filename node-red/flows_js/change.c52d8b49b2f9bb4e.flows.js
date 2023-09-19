const Node = {
  "id": "c52d8b49b2f9bb4e",
  "type": "change",
  "z": "fd98a6615193936d",
  "name": "Rens svar + \\n Flyt newRun til payload",
  "rules": [
    {
      "t": "set",
      "p": "newRun.runFinalized",
      "pt": "msg",
      "to": "false",
      "tot": "bool"
    },
    {
      "t": "set",
      "p": "newRun.allReceiptsProcessed",
      "pt": "msg",
      "to": "false",
      "tot": "bool"
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
  "x": 1130,
  "y": 1280,
  "wires": [
    [
      "9656e49e15c33931"
    ]
  ],
  "_order": 404
}

module.exports = Node;