const Node = {
  "id": "75ecdbad0ee90501",
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
  "x": 1630,
  "y": 1980,
  "wires": [
    [
      "51be442e43fd3854"
    ]
  ],
  "_order": 957
}

module.exports = Node;