const Node = {
  "id": "c65165dc56f55ff3",
  "type": "change",
  "z": "a1b347492c77827f",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "workletUser",
      "pt": "msg",
      "to": "WORKLET_USER",
      "tot": "env"
    },
    {
      "t": "set",
      "p": "workletPass",
      "pt": "msg",
      "to": "WORKLET_PASS",
      "tot": "env"
    },
    {
      "t": "set",
      "p": "currentRun",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "currentRun.startDate",
      "pt": "msg",
      "to": "08/05/2023",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "currentRun.endDate",
      "pt": "msg",
      "to": "08/05/2023",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 480,
  "y": 640,
  "wires": [
    [
      "dd45022efd4041b5"
    ]
  ],
  "_order": 505
}

module.exports = Node;