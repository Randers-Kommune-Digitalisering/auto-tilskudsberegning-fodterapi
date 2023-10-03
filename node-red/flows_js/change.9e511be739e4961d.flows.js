const Node = {
  "id": "9e511be739e4961d",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "be9daf3e5141b1cb",
  "name": "Send status",
  "rules": [
    {
      "t": "set",
      "p": "message",
      "pt": "msg",
      "to": "Der blev ikke fundet nogle nye fakturaer ved seneste søgning!",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "type",
      "pt": "msg",
      "to": "alert",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "title",
      "pt": "msg",
      "to": "Ingen nye fakturaer",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1850,
  "y": 1400,
  "wires": [
    [
      "a7a320712ab374fd"
    ]
  ],
  "_order": 860
}

module.exports = Node;