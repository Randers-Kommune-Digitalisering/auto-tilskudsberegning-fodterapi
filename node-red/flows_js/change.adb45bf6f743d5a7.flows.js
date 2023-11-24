const Node = {
  "id": "adb45bf6f743d5a7",
  "type": "change",
  "z": "29cd456b5e8fbe86",
  "name": "Auth",
  "rules": [
    {
      "t": "set",
      "p": "authkey",
      "pt": "msg",
      "to": "BROWSERLESS_AUTH",
      "tot": "env"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 590,
  "y": 220,
  "wires": [
    [
      "0cfad4e32b8d1147"
    ]
  ],
  "_order": 52
}

module.exports = Node;