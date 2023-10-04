const Node = {
  "id": "57c822776ccc4195",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "f0775df5510c6dd0",
  "name": "Fjern borgere som mangler data",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload @ $p .\t(\t    ( errorList[cpr = $p.cpr] ~> $exists ) = false ?\t    {\t        \"cpr\": $p.cpr,\t        \"persondata\": $p.persondata,\t        \"faktura\": $p.faktura\t    }\t)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 570,
  "y": 2080,
  "wires": [
    [
      "ea091f7bde0f1f10"
    ]
  ],
  "_order": 876
}

module.exports = Node;