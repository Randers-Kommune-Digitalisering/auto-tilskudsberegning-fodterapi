const Node = {
  "id": "eb42d5596baba5be",
  "type": "change",
  "z": "5bb3204aef17c104",
  "g": "404b73d5fb6cfa91",
  "name": "Arkiver i global var",
  "rules": [
    {
      "t": "set",
      "p": "receipts",
      "pt": "global",
      "to": "$$.receiptId in $globalContext(\"receipts\").actions.faktura.id ?\t(\t    $globalContext(\"receipts\") ~> | $.actions |\t    (\t    $.faktura.id = $$.receiptId or\t    $$.receiptId in $.faktura.id ?\t    {\t        \"archived\": true\t    }\t    )|\t)\t:\t(\t    $globalContext(\"receipts\") ~> | $.noactions |\t    (\t    $.faktura.id = $$.receiptId or\t    $$.receiptId in $.faktura.id ?\t    {\t        \"archived\": true\t    }\t    )|\t)\t",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1130,
  "y": 1400,
  "wires": [
    [
      "a30e9bc55d2b4fc2"
    ]
  ],
  "_order": 761
}

module.exports = Node;