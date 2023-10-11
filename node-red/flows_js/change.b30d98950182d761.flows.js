const Node = {
  "id": "b30d98950182d761",
  "type": "change",
  "z": "43652557380ac3f3",
  "name": "Find receipt from receipt_id",
  "rules": [
    {
      "t": "set",
      "p": "receipt_id",
      "pt": "msg",
      "to": "req.query.receiptid",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "(\t    $receipts := $globalContext(\"receipts\");\t    \t    $$.receipt_id ~> $exists() ?\t\t        ( [] ~> $append($receipts.actions) ~> $append($receipts.noactions) ) [$$.receipt_id in faktura.id]\t        :\t\t        ( ( [] ~> $append($receipts.actions) ~> $append($receipts.noactions) ) [archived = false] ) ~> $exists() ?\t\t            ( [] ~> $append($receipts.actions) ~> $append($receipts.noactions) ) [archived = false]\t            :\t            ( [] ~> $append($receipts.actions) ~> $append($receipts.noactions) ) [0]\t\t)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 500,
  "y": 1880,
  "wires": [
    [
      "ab18ac7e86e6954a"
    ]
  ],
  "_order": 398
}

module.exports = Node;