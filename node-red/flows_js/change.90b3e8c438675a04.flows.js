const Node = {
  "id": "90b3e8c438675a04",
  "type": "change",
  "z": "43652557380ac3f3",
  "name": "rulesToAccept?",
  "rules": [
    {
      "t": "set",
      "p": "webElements.rulesToAccept",
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
  "x": 280,
  "y": 1420,
  "wires": [
    [
      "5ff5fd04aa3fdf30"
    ]
  ],
  "_order": 385
}

module.exports = Node;