const Node = {
  "id": "d69d99eee8adcbf6",
  "type": "change",
  "z": "43652557380ac3f3",
  "name": "loginToAccept?",
  "rules": [
    {
      "t": "set",
      "p": "payload.pageElements.loginToAccept",
      "pt": "msg",
      "to": "payload.webSettings.acceptances.login = true ? false : true",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 740,
  "y": 460,
  "wires": [
    [
      "d5dda5bcbcb28f81",
      "e4fe72d9b3657c5c"
    ]
  ],
  "_order": 171
}

module.exports = Node;