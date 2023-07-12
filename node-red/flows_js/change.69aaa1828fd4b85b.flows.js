const Node = {
  "id": "69aaa1828fd4b85b",
  "type": "change",
  "z": "43652557380ac3f3",
  "g": "55635bddfbbcf6e4",
  "name": "Time out!",
  "rules": [
    {
      "t": "set",
      "p": "#:(storeInFile)::webSettings.acceptances.login",
      "pt": "global",
      "to": "false",
      "tot": "bool"
    },
    {
      "t": "set",
      "p": "#:(storeInFile)::webSettings.acceptances.rules",
      "pt": "global",
      "to": "false",
      "tot": "bool"
    },
    {
      "t": "set",
      "p": "#:(storeInFile)::webSettings.acceptances.grants",
      "pt": "global",
      "to": "false",
      "tot": "bool"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 460,
  "y": 120,
  "wires": [
    [
      "ab622e75bfcfc759"
    ]
  ],
  "_order": 228
}

module.exports = Node;