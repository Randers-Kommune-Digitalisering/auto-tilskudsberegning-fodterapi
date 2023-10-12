const Node = {
  "id": "16bf0e6580aaf246",
  "type": "change",
  "z": "43652557380ac3f3",
  "name": "grantsToAccept?",
  "rules": [
    {
      "t": "set",
      "p": "payload.pageElements.grantsToAccept",
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
  "x": 510,
  "y": 2680,
  "wires": [
    [
      "6839897d12a405ac"
    ]
  ],
  "_order": 294
}

module.exports = Node;