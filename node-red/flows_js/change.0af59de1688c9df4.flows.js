const Node = {
  "id": "0af59de1688c9df4",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "20ed2134d81b57c8",
  "name": "Send status",
  "rules": [
    {
      "t": "set",
      "p": "message",
      "pt": "msg",
      "to": "Loginoplysninger er muligvis forkerte, ellers fungerer WorkLet webinterface ikke som det skal.",
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
      "to": "Fejl ved hentning af WorkLet fakturaer",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 390,
  "y": 1060,
  "wires": [
    [
      "7e0e36d833794733"
    ]
  ],
  "_order": 542
}

module.exports = Node;