const Node = {
  "id": "8da1507ff2f926c0",
  "type": "change",
  "z": "5bb3204aef17c104",
  "name": "Clean response object",
  "rules": [
    {
      "t": "delete",
      "p": "payload.pageContent",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "payload.webSettingsStr",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "payload.pageHTML",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "payload.pageTitle",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "payload.pageElements",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1980,
  "y": 720,
  "wires": [
    [
      "952bb78592e2ca1e",
      "d529fc0a0d82838e"
    ]
  ],
  "_order": 426
}

module.exports = Node;