const Node = {
  "id": "ea3be6d83c70d734",
  "type": "change",
  "z": "c28a486ea3e09387",
  "g": "0e177132df886f4e",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "payload.webSettings",
      "pt": "msg",
      "to": "#:(storeInFile)::webSettings",
      "tot": "global",
      "dc": true
    },
    {
      "t": "delete",
      "p": "tempMsg",
      "pt": "flow"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1535,
  "y": 1060,
  "wires": [
    [
      "97801c386c197805"
    ]
  ],
  "l": false,
  "_order": 453
}

module.exports = Node;