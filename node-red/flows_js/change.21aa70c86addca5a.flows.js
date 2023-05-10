const Node = {
  "id": "21aa70c86addca5a",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "b95a594cf23c004f",
  "name": "Add step run history",
  "rules": [
    {
      "t": "set",
      "p": "stepHistoryChange",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "stepHistoryChange.newStep",
      "pt": "msg",
      "to": "extract-worklet",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "stepHistoryChange.newState",
      "pt": "msg",
      "to": "running",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 2000,
  "y": 1520,
  "wires": [
    [
      "966a912086c08955"
    ]
  ],
  "_order": 281
}

module.exports = Node;