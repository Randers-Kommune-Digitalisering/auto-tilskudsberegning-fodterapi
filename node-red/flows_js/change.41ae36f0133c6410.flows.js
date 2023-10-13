const Node = {
  "id": "41ae36f0133c6410",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "287b33b8879cbbbc",
  "name": "Fjern borgere som mangler data",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload @$p.\t(\t    (missingData[cpr = $p.cpr] ~> $exists) = false ?\t    {\t        \"cpr\": $p.cpr,\t        \"persondata\": $p.persondata,\t        \"faktura\": $p.faktura\t    }\t)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 750,
  "y": 1860,
  "wires": [
    [
      "215c708ef9319356"
    ]
  ],
  "_order": 741
}

module.exports = Node;