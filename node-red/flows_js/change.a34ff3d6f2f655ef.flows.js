const Node = {
  "id": "a34ff3d6f2f655ef",
  "type": "change",
  "z": "fd98a6615193936d",
  "name": "Konverter datoer + bools",
  "rules": [
    {
      "t": "set",
      "p": "payload.startDate",
      "pt": "msg",
      "to": "(payload.startDate ~> $split(\"T\"))[0]",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "payload.endDate",
      "pt": "msg",
      "to": "(payload.endDate ~> $split(\"T\"))[0]",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "payload.runFinalized",
      "pt": "msg",
      "to": "payload.runFinalized = 1 ? true : false",
      "tot": "jsonata"
    },
    {
      "t": "delete",
      "p": "payload.lastUpdated",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "payload.runStarted",
      "pt": "msg"
    },
    {
      "t": "move",
      "p": "payload.userStartedRun",
      "pt": "msg",
      "to": "payload.dqUser",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "payload.runResumed",
      "pt": "msg",
      "to": "true",
      "tot": "bool"
    },
    {
      "t": "move",
      "p": "payload",
      "pt": "msg",
      "to": "newRun",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1130,
  "y": 1080,
  "wires": [
    [
      "ed9ab6596a8a16c7"
    ]
  ],
  "_order": 304
}

module.exports = Node;