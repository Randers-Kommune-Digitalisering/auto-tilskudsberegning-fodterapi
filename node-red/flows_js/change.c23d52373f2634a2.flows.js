const Node = {
  "id": "c23d52373f2634a2",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "6c7a3f8252158db6",
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
  "x": 570,
  "y": 1860,
  "wires": [
    [
      "b5f7952c5718fafd"
    ]
  ],
  "_order": 249
}

module.exports = Node;