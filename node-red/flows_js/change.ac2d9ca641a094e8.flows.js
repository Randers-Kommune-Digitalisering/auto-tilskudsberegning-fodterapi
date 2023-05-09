const Node = {
  "id": "ac2d9ca641a094e8",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "0c2baa05bdc8cb3c",
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
  "x": 1900,
  "y": 1900,
  "wires": [
    [
      "f1884a7421b13391"
    ]
  ],
  "_order": 327
}

module.exports = Node;