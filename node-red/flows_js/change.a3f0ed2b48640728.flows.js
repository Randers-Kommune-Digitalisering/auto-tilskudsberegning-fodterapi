const Node = {
  "id": "a3f0ed2b48640728",
  "type": "change",
  "z": "5bb3204aef17c104",
  "name": "Set response",
  "rules": [
    {
      "t": "set",
      "p": "requestType",
      "pt": "msg",
      "to": "finalizeRun",
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
  "x": 1370,
  "y": 1680,
  "wires": [
    [
      "7de45ed1590468f4"
    ]
  ],
  "_order": 1063
}

module.exports = Node;