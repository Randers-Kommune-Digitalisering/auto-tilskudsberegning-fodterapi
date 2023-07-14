const Node = {
  "id": "e14ffe4e7fa755d0",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "5904f9eeed39fd7f",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "#:(storeInFile)::webSettings.state.isRunning",
      "pt": "global",
      "to": "false",
      "tot": "bool"
    },
    {
      "t": "delete",
      "p": "payload",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1155,
  "y": 520,
  "wires": [
    [
      "4ed5eb2896771598",
      "2cffb25631b97680"
    ]
  ],
  "l": false,
  "_order": 651
}

module.exports = Node;