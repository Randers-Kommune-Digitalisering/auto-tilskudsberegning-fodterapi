const Node = {
  "id": "ce4f6a48e231c44c",
  "type": "change",
  "z": "8ea344595d9a442a",
  "name": "Retrieve runHistory backup",
  "rules": [
    {
      "t": "set",
      "p": "#:(storeInFile)::runHistory",
      "pt": "global",
      "to": "#:(storeInFile)::runHistoryBackup",
      "tot": "global",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 420,
  "y": 3980,
  "wires": [
    []
  ],
  "_order": 714
}

module.exports = Node;