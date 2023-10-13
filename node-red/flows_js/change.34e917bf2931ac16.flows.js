const Node = {
  "id": "34e917bf2931ac16",
  "type": "change",
  "z": "449328c1ffbe7d56",
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
  "x": 690,
  "y": 220,
  "wires": [
    [
      "c036769fe7a85166"
    ]
  ],
  "_order": 356
}

module.exports = Node;