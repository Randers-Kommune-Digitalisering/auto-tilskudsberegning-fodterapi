const Node = {
  "id": "16a2ecbfc488f7da",
  "type": "change",
  "z": "449328c1ffbe7d56",
  "name": "Bevilling (top)",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "$.payload ~> |$.persondata|\t{\t    /* Kontrollerer om bevilling indeholder ordet \"fodpleje\", returnerer true/false */\t    \"bevilling\":    bevilling \t                    ~> $lowercase()\t                    ~> $contains(\"fodpleje\")\t}|",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 260,
  "y": 120,
  "wires": [
    [
      "d0e03c914cc171cd"
    ]
  ],
  "_order": 494
}

module.exports = Node;