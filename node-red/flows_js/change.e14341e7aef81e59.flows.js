const Node = {
  "id": "e14341e7aef81e59",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "3fd0647603ec528e",
  "name": "Reset ALL",
  "rules": [
    {
      "t": "delete",
      "p": "#:(storeInFile)::grants",
      "pt": "global"
    },
    {
      "t": "delete",
      "p": "#:(storeInFile)::rules",
      "pt": "global"
    },
    {
      "t": "delete",
      "p": "#:(storeInFile)::runHistory",
      "pt": "global"
    },
    {
      "t": "delete",
      "p": "#:(storeInFile)::webSettings",
      "pt": "global"
    },
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
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1000,
  "y": 3800,
  "wires": [
    []
  ],
  "_order": 610
}

module.exports = Node;