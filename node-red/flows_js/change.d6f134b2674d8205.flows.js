const Node = {
  "id": "d6f134b2674d8205",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "5904f9eeed39fd7f",
  "name": "Send status",
  "rules": [
    {
      "t": "set",
      "p": "message",
      "pt": "msg",
      "to": "Faktueraer er blevet behandlet tidligere i dag, og der er derfor ingen nye fakturaer at vise. Prøv igen i morgen.",
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
  "x": 1230,
  "y": 560,
  "wires": [
    [
      "265ca7421f0c6bf3"
    ]
  ],
  "_order": 660
}

module.exports = Node;