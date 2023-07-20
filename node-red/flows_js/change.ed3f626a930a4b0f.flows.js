const Node = {
  "id": "ed3f626a930a4b0f",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "name": "Find borgere med regelbrud",
  "rules": [
    {
      "t": "set",
      "p": "errorList",
      "pt": "msg",
      "to": "(\t$index := payload.dataValidation[ $.allRulesRespected = false ].dataIndex;\t$cpr := payload.inputObject.cpr [ $index ];\t\t$index != null ?\t$cpr @ $cpr .\t(\t{\t    \"cpr\": $cpr,\t    \"regelbrud\": payload.inputObject.rules.name & ( payload.inputObject.rules.description ? \": \" & payload.inputObject.rules.description )\t}\t    ~> $append(($flowContext('citizenReceiptData'))[$index])\t    ~> $merge\t)\t)",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "errorList",
      "pt": "flow",
      "to": "$flowContext('errorList') ~> $append( errorList )",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 800,
  "y": 2840,
  "wires": [
    []
  ],
  "_order": 965
}

module.exports = Node;