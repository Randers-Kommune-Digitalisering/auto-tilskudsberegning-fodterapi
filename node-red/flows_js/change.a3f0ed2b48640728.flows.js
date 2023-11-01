const Node = {
  "id": "a3f0ed2b48640728",
  "type": "change",
  "z": "5bb3204aef17c104",
  "name": "Set response",
  "rules": [
    {
      "t": "set",
      "p": "payload.requestType",
      "pt": "msg",
      "to": "completeRun",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "payload.page",
      "pt": "msg",
      "to": "start",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1350,
  "y": 1580,
  "wires": [
    [
      "7de45ed1590468f4"
    ]
  ],
  "_order": 694
}

module.exports = Node;