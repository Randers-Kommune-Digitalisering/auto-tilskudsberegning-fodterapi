const Node = {
  "id": "c401932969daa0d6",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "dd8bf1dc973547ed",
  "name": "Rens msg",
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
  "x": 1360,
  "y": 1420,
  "wires": [
    [
      "cfa41228349c2035"
    ]
  ],
  "_order": 890
}

module.exports = Node;