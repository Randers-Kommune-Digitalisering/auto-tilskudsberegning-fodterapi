const Node = {
  "id": "c69a20e302b88549",
  "type": "change",
  "z": "db94b4c117de2f6a",
  "name": "Load settings",
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
      "t": "set",
      "p": "payload.webData",
      "pt": "msg",
      "to": "webData",
      "tot": "global",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 530,
  "y": 280,
  "wires": [
    [
      "c7471e96ad8de5e4"
    ]
  ],
  "_order": 124
}

module.exports = Node;