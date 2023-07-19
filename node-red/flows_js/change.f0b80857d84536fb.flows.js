const Node = {
  "id": "f0b80857d84536fb",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "f0775df5510c6dd0",
  "name": "Find borgere uden persondata",
  "rules": [
    {
      "t": "set",
      "p": "errorList",
      "pt": "msg",
      "to": "receipts @$r.\t(\t    (payload[cpr = $r.patientCPR] ~> $exists() = false)\t or (payload[cpr = $r.patientCPR].personligtillaegsprocent ~> $exists() = false) ?\t    {\t        \"cpr\": $r.patientCPR,\t        \"faktura\": $r,\t        \"regelbrud\": \"Borger-data blev ikke indsamlet korrekt. Borger findes muligvis ikke i KP.\"\t    }\t)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 570,
  "y": 1900,
  "wires": [
    [
      "57c822776ccc4195"
    ]
  ],
  "_order": 910
}

module.exports = Node;