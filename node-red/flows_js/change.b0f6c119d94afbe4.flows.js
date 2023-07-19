const Node = {
  "id": "b0f6c119d94afbe4",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "db9b0160d9fdb906",
  "name": "Find borgere som ikke har en sag / bevilling",
  "rules": [
    {
      "t": "set",
      "p": "errors",
      "pt": "msg",
      "to": "$append(errors, payload @$p.\t(\t    ($p.handlinger ~> $exists) = false ?\t    {\t        \"cpr\": $p.cpr,\t        \"regelbrud\": \"Ingen gyldig sag blev fundet til behandlingstypen\",\t        \"persondata\": $p.persondata,\t        \"faktura\": $p.faktura\t    }\t)\t)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 350,
  "y": 3140,
  "wires": [
    [
      "85fa724fcb7b347b"
    ]
  ],
  "_order": 883
}

module.exports = Node;