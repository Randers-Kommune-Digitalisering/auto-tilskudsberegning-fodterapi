const Node = {
  "id": "c6c8addcda828038",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "954337fe9fd2e7cc",
  "name": "Get current receipt ID",
  "rules": [
    {
      "t": "set",
      "p": "tempData",
      "pt": "msg",
      "to": "(\t    $num := payload.data.id ~> $number();\t    tempDataArray[$num].faktura.id\t)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 940,
  "y": 3160,
  "wires": [
    [
      "6c4f0dadb67f015e"
    ]
  ],
  "_order": 586
}

module.exports = Node;