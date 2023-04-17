const Node = {
  "id": "274738f45a0d5d5a",
  "type": "change",
  "z": "41d1b8798efe7e15",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "pupController",
      "pt": "msg",
      "to": "{\t    \"pages\": [],\t    \"commands\": payload\t}",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "pupCount",
      "pt": "flow",
      "to": "0",
      "tot": "num"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1120,
  "y": 320,
  "wires": [
    [
      "1a32f920705bb1bc"
    ]
  ],
  "_order": 75
}

module.exports = Node;