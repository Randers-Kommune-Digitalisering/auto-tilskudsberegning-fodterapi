const Node = {
  "id": "18851cb72945b58d",
  "type": "change",
  "z": "43652557380ac3f3",
  "name": "grantsToAccept?",
  "rules": [
    {
      "t": "set",
      "p": "webElements.grantsToAccept",
      "pt": "msg",
      "to": "($globalContext(\"webSettings\")).acceptances.grants = true ? false : true",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 290,
  "y": 1580,
  "wires": [
    [
      "b7e0b4755741c567"
    ]
  ]
}

module.exports = Node;