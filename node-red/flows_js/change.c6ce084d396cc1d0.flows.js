const Node = {
  "id": "c6ce084d396cc1d0",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "errorList",
      "pt": "msg",
      "to": "(\t$index := payload.dataValidation[ $.allRulesRespected = false ].dataIndex;\t$cpr := payload.inputObject.cpr [ $index ];\t\t$index != null ?\t{\t    \"cpr\": $cpr,\t    \"regelbrud\": payload.inputObject.rules.name & ( payload.inputObject.rules.description ? \": \" & payload.inputObject.rules.description )\t}\t    ~> $append(citizenReceiptData[$index])\t    ~> $merge\t)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1290,
  "y": 2560,
  "wires": [
    [
      "060ccaeda1c45f0b"
    ]
  ],
  "_order": 955
}

module.exports = Node;