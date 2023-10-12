const Node = {
  "id": "b24facdd74fa8b50",
  "type": "change",
  "z": "43652557380ac3f3",
  "name": "rulesToAccept?",
  "rules": [
    {
      "t": "set",
      "p": "payload.pageElements.rulesToAccept",
      "pt": "msg",
      "to": "($globalContext(\"webSettings\")).acceptances.rules = true ? false : true",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 500,
  "y": 2580,
  "wires": [
    [
      "927b1a1a92e941cd"
    ]
  ],
  "_order": 277
}

module.exports = Node;