const Node = {
  "id": "12d9ffdfaf71a523",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "287b33b8879cbbbc",
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
  "x": 420,
  "y": 1460,
  "wires": [
    [
      "ca6df1c9d056a924"
    ]
  ],
  "_order": 305
}

module.exports = Node;