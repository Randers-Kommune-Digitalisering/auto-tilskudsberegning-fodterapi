const Node = {
  "id": "40785040f06925f6",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "3fd0647603ec528e",
  "name": "Reset webData",
  "rules": [
    {
      "t": "delete",
      "p": "webStates",
      "pt": "global"
    },
    {
      "t": "delete",
      "p": "webSteps",
      "pt": "global"
    },
    {
      "t": "delete",
      "p": "webData",
      "pt": "global"
    },
    {
      "t": "set",
      "p": "#:(storeInFile)::webSettings.acceptances.login",
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
  "x": 1010,
  "y": 3840,
  "wires": [
    []
  ],
  "_order": 628
}

module.exports = Node;