const Node = {
  "id": "b5f7952c5718fafd",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "6c7a3f8252158db6",
  "name": "Fjern borgere som ikke har en sag / bevilling",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload @$p.\t(\t    ($p.handlinger ~> $exists) ?\t    {\t        \"cpr\": $p.cpr,\t        \"persondata\": $p.persondata,\t        \"faktura\": $p.faktura,\t        \"handlinger\": $p.handlinger\t    }\t)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 470,
  "y": 2460,
  "wires": [
    [
      "c728e9afbea480e9",
      "5d7e42be40e46699"
    ]
  ],
  "_order": 558
}

module.exports = Node;