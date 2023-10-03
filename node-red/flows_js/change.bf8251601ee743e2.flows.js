const Node = {
  "id": "bf8251601ee743e2",
  "type": "change",
  "z": "43652557380ac3f3",
  "g": "64ba453bbb3e6616",
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
  "x": 640,
  "y": 120,
  "wires": [
    [
      "86eb6019517b9ed1"
    ]
  ],
  "_order": 351
}

module.exports = Node;