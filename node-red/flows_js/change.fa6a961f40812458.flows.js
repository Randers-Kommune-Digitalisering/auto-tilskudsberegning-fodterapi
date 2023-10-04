const Node = {
  "id": "fa6a961f40812458",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "7259557bf9adb316",
  "name": "Flyt regel til payload.rules",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{ \"rules\": payload }",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 930,
  "y": 2480,
  "wires": [
    [
      "1d24afdf200e3359"
    ]
  ],
  "_order": 898
}

module.exports = Node;