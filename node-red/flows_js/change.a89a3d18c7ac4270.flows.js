const Node = {
  "id": "a89a3d18c7ac4270",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "bb5f1c24606d30f1",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "#:(storeInFile)::runHistoryBackup",
      "pt": "global",
      "to": "#:(storeInFile)::runHistory",
      "tot": "global",
      "dc": true
    },
    {
      "t": "set",
      "p": "runHistory",
      "pt": "msg",
      "to": "#:(storeInFile)::runHistory",
      "tot": "global",
      "dc": true
    },
    {
      "t": "set",
      "p": "#:(storeInFile)::webSettings.acceptances.login",
      "pt": "global",
      "to": "false",
      "tot": "bool"
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
  "x": 675,
  "y": 3840,
  "wires": [
    [
      "fa1612c70b1b3ea7"
    ]
  ],
  "l": false,
  "_order": 650
}

module.exports = Node;