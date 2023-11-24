const Node = {
  "id": "3b3f7f6304da71bd",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "7259557bf9adb316",
  "name": "Fjern borgere med regelbrud",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload @ $p .\t(\t    ( errorList[cpr = ($p.cpr ~> $string()) ] ~> $exists ) = false ?\t    {\t        \"cpr\": $p.cpr,\t        \"persondata\": $p.persondata,\t        \"faktura\": $p.faktura\t    }\t)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1600,
  "y": 2540,
  "wires": [
    [
      "c76f71ac3a0507af"
    ]
  ],
  "_order": 552
}

module.exports = Node;