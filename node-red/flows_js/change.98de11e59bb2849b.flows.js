const Node = {
  "id": "98de11e59bb2849b",
  "type": "change",
  "z": "29cd456b5e8fbe86",
  "name": "Set example data",
  "rules": [
    {
      "t": "set",
      "p": "citizens",
      "pt": "msg",
      "to": "[\"0000000000\"]",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "kpurl",
      "pt": "msg",
      "to": "",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "username",
      "pt": "msg",
      "to": "",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "password",
      "pt": "msg",
      "to": "",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 370,
  "y": 440,
  "wires": [
    [
      "289ce7e4db9659e9"
    ]
  ],
  "_order": 43
}

module.exports = Node;