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
      "to": "receipts @$r.\t(\t    payload[cpr = $r.patientCPR] ~> $exists() = false ?\t    {\t        \"cpr\": $r.patientCPR,\t        \"faktura\": $r,\t        \"regelbrud\": \"Borger-data blev ikke indsamlet korrekt\"\t    }\t)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 740,
  "y": 1200,
  "wires": [
    [
      "b01934ac82f070c3"
    ]
  ],
  "_order": 309
}

module.exports = Node;