const Node = {
  "id": "ea091f7bde0f1f10",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "f0775df5510c6dd0",
  "name": "Konverter dato",
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
  "x": 880,
  "y": 2040,
  "wires": [
    [
      "3c5d78875da747c8"
    ]
  ],
  "_order": 901
}

module.exports = Node;