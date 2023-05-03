const Node = {
  "id": "f5d7b1d2cde30ea2",
  "type": "change",
  "z": "85ff29bdef7c1aea",
  "name": "Update webSettings state",
  "rules": [
    {
      "t": "set",
      "p": "#:(storeInFile)::webSettings.state.lastStep",
      "pt": "global",
      "to": "newStep",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "set",
      "p": "#:(storeInFile)::webSettings.state.lastState",
      "pt": "global",
      "to": "newState",
      "tot": "msg",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1370,
  "y": 160,
  "wires": [
    []
  ],
  "_order": 112
}

module.exports = Node;