const Node = {
  "id": "75ecdbad0ee90501",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "f0775df5510c6dd0",
  "name": "Fjern borgere fra errorList",
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
  "x": 1610,
  "y": 2120,
  "wires": [
    [
      "51be442e43fd3854"
    ]
  ],
  "_order": 894
}

module.exports = Node;