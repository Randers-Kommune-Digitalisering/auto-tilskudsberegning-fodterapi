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
    },
    {
      "t": "delete",
      "p": "payload.webData",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "payload.webStates",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "payload.webSteps",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "payload.webSettings",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "payload.grants",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "payload.data",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 2180,
  "y": 740,
  "wires": [
    []
  ],
  "_order": 832
}

module.exports = Node;