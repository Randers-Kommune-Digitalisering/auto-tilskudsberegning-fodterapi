const Node = {
  "id": "495acf8df82f3fdb",
  "type": "change",
  "z": "5bb3204aef17c104",
  "g": "473e95a14e971e50",
  "name": "Set response",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "payload.requestType",
      "pt": "msg",
      "to": "getMetrics",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "payload.statusCodes",
      "pt": "msg",
      "to": "200",
      "tot": "num"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1410,
  "y": 660,
  "wires": [
    [
      "9a872468c9750fb4"
    ]
  ],
  "_order": 745
}

module.exports = Node;