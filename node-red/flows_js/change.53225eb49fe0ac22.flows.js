const Node = {
  "id": "53225eb49fe0ac22",
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
  "y": 3800,
  "wires": [
    [
      "5f4c45329970fab2"
    ]
  ],
  "l": false,
  "_order": 630
}

module.exports = Node;