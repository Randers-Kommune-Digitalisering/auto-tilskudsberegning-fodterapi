const Node = {
  "id": "ab6c857e7ced547b",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "a42cbec523628e4e",
  "name": "Set stdout",
  "rules": [
    {
      "t": "set",
      "p": "stdout",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "stdout.timestamp",
      "pt": "msg",
      "to": "",
      "tot": "date"
    },
    {
      "t": "set",
      "p": "stdout.phase",
      "pt": "msg",
      "to": "extract_kp",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "stdout.action",
      "pt": "msg",
      "to": "Persondata læst",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "stdout.succes",
      "pt": "msg",
      "to": "succesful",
      "tot": "msg",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 880,
  "y": 1640,
  "wires": [
    [
      "706f423d87bc269c"
    ]
  ],
  "_order": 477
}

module.exports = Node;