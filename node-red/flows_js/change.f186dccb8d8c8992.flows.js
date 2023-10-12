const Node = {
  "id": "f186dccb8d8c8992",
  "type": "change",
  "z": "449328c1ffbe7d56",
  "name": "Formue",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "$.payload ~> |$.persondata|\t{\t    \"formue\": \t            formue = \"Ikke oplyst\" ?\t                null\t            :\t            formue = \"-\" ?\t                null\t            :\t                (formue\t                ~> $replace(\"-\", \"-1\")\t                ~> $split(\" \"))[0]\t                ~> $replace(\".\", \"\")\t                ~> $replace(\",\", \".\")\t                ~> $number()\t}\t|",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 240,
  "y": 220,
  "wires": [
    [
      "be2ba6fc0ebbfa21"
    ]
  ],
  "_order": 485
}

module.exports = Node;