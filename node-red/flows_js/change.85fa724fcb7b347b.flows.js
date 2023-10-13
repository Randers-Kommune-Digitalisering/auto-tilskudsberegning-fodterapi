const Node = {
  "id": "85fa724fcb7b347b",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "db9b0160d9fdb906",
  "name": "Fjern borgere som ikke har en sag / bevilling",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload @ $p .\t(\t    ( $p.handlinger ~> $exists ) ?\t    {\t        \"cpr\": $p.cpr,\t        \"persondata\": $p.persondata,\t        \"faktura\": $p.faktura,\t        \"handlinger\": $p.handlinger\t    }\t)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 770,
  "y": 3200,
  "wires": [
    [
      "f397ca465aaaa01d",
      "ba3f8cab79489d83"
    ]
  ],
  "_order": 488
}

module.exports = Node;