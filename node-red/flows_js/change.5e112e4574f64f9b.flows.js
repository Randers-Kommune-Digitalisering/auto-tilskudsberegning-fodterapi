const Node = {
  "id": "5e112e4574f64f9b",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "287b33b8879cbbbc",
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
  "x": 800,
  "y": 2020,
  "wires": [
    [
      "ac26dfbc2efcbb4f"
    ]
  ],
  "_order": 306
}

module.exports = Node;