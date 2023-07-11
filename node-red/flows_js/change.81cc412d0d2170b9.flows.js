const Node = {
  "id": "81cc412d0d2170b9",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "287b33b8879cbbbc",
  "name": "URL",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "$.payload ~> |$.persondata|\t{\t    \"kpurl\": \t            kpurl ~> $contains(\"overblik?pId=\") ?\t                (kpurl ~> $split(\"overblik?pId=\"))[1]\t            :\t            (((kpurl ~> $split(\"/person/\"))[1]) ~> $split(\"/overblik\"))[0]\t}\t|",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 390,
  "y": 2100,
  "wires": [
    [
      "7d7a7bf5a54224e8"
    ]
  ],
  "_order": 342
}

module.exports = Node;