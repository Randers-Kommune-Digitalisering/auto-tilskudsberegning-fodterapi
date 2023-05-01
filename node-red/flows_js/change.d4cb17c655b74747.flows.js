const Node = {
  "id": "d4cb17c655b74747",
  "type": "change",
  "z": "c28a486ea3e09387",
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
      "f6100bedf21eaf46",
      "edf7c7526a420888"
    ]
  ],
  "_order": 418
}

module.exports = Node;