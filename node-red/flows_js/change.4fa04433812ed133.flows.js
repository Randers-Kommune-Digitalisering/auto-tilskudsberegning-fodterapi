const Node = {
  "id": "4fa04433812ed133",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "380e5c7e0ea3778b",
  "name": "Definér states (archived / recommended)",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "$.payload ~> | $ |\t(\t    $fid := faktura[0].id;\t    {\t\t    \"recommended\": true,\t    \"archived\": $$.currentRun.processedReceipts[$ = $fid] ~> $exists()\t\t})|",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "errors",
      "pt": "msg",
      "to": "$.errors ~> | $ |\t(\t    $fid := faktura[0].id;\t    {\t\t    \"recommended\": false,\t    \"archived\": $$.currentRun.processedReceipts[$ = $fid] ~> $exists()\t\t})|",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 460,
  "y": 2700,
  "wires": [
    [
      "c7ca8c02a788a41d"
    ]
  ],
  "_order": 503
}

module.exports = Node;