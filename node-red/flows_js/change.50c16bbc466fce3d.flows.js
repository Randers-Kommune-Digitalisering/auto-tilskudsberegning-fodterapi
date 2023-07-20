const Node = {
  "id": "50c16bbc466fce3d",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "eca9722584206eca",
  "name": "Send status",
  "rules": [
    {
      "t": "set",
      "p": "message",
      "pt": "msg",
      "to": "Færdiggører ...",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "type",
      "pt": "msg",
      "to": "update",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 2010,
  "y": 2860,
  "wires": [
    [
      "1b061f69a24808eb"
    ]
  ],
  "_order": 912
}

module.exports = Node;