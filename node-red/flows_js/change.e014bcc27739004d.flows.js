const Node = {
  "id": "e014bcc27739004d",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "7259557bf9adb316",
  "name": "Find borgere med regelbrud",
  "rules": [
    {
      "t": "set",
      "p": "errorList",
      "pt": "msg",
      "to": "(\t$index := payload.dataValidation[ $.allRulesRespected = false ].dataIndex;\t$cpr := payload.inputObject.cpr [ $index ];\t\t$index != null ?\t$cpr @ $cpr .\t(\t{\t    \"cpr\": $cpr,\t    \"regelbrud\": payload.inputObject.rules.name & ( payload.inputObject.rules.description ? \": \" & payload.inputObject.rules.description )\t}\t    ~> $append(($flowContext('citizenReceiptData'))[cpr = $cpr])/*$append($$.citizenReceiptData[cpr = $cpr])*/\t    ~> $merge\t)\t)",
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
  "x": 1260,
  "y": 2520,
  "wires": [
    [
      "ef684373719a9a76"
    ]
  ]
}

module.exports = Node;