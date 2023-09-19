const Node = {
  "id": "da332df99f96d858",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "9c4f3569ebca5f7b",
  "name": "Clean msg",
  "rules": [
    {
      "t": "delete",
      "p": "payload",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "dqUser",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "dqPass",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "pupController",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "pupOutputs",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "selectors",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1510,
  "y": 1300,
  "wires": [
    [
      "172fe34eeccca8dd"
    ]
  ],
  "_order": 656
}

module.exports = Node;