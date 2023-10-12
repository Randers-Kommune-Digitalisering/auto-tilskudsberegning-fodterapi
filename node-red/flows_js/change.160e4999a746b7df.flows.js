const Node = {
  "id": "160e4999a746b7df",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "0644ae6c3d5c62e8",
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
      "p": "errorList",
      "pt": "msg",
      "to": "$.errorList ~> | $ |\t(\t    $fid := faktura[0].id;\t    {\t\t    \"recommended\": false,\t    \"archived\": $$.currentRun.processedReceipts[$ = $fid] ~> $exists()\t\t})|",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 440,
  "y": 3560,
  "wires": [
    [
      "12b47dacd4065784"
    ]
  ],
  "_order": 843
}

module.exports = Node;