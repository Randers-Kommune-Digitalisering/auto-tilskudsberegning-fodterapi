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
      "to": "payload.webSettings.acceptances.grants = true ? false : true",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 750,
  "y": 660,
  "wires": [
    [
      "6839897d12a405ac"
    ]
  ],
  "_order": 141
}

module.exports = Node;