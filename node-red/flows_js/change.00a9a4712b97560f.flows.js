const Node = {
  "id": "00a9a4712b97560f",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "287b33b8879cbbbc",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "missingData",
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
  "x": 720,
  "y": 1740,
  "wires": [
    [
      "b01934ac82f070c3"
    ]
  ],
  "_order": 625
}

module.exports = Node;