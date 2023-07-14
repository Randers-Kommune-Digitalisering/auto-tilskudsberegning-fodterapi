const Node = {
  "id": "c234c5d1dc7edf71",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "dc2c5977964e03db",
  "name": "Fjern borgere som ikke er berettiget",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload @$p.\t(\t    \t    (errors[cpr = $p.cpr] ~> $exists) = false ?\t    {\t        \"cpr\": $p.cpr,\t        \"persondata\": $p.persondata,\t        \"faktura\": $p.faktura\t    }\t)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1780,
  "y": 2460,
  "wires": [
    []
  ],
  "_order": 916
}

module.exports = Node;