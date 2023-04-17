const Node = {
  "id": "ca4cd4b46c05bb1d",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "e1dc720ff59cd15f",
  "name": "Send status",
  "rules": [
    {
      "t": "set",
      "p": "message",
      "pt": "msg",
      "to": "Henter fakturaer fra WorkLet ...",
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
  "x": 1970,
  "y": 300,
  "wires": [
    [
      "5b599232bb01d1d2"
    ]
  ],
  "_order": 325
}

module.exports = Node;