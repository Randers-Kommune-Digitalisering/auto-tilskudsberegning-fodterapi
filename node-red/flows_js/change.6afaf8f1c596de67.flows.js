const Node = {
  "id": "6afaf8f1c596de67",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "287b33b8879cbbbc",
  "name": "Fjern tidspunkt fra dato",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "$.payload ~> |$.faktura|\t{\t    \"dato\": (dato\t        ~> $split(\"T\"))[0]\t}\t|",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1160,
  "y": 1780,
  "wires": [
    [
      "141037f73383a9f6"
    ]
  ],
  "_order": 309
}

module.exports = Node;