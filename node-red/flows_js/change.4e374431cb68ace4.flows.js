const Node = {
  "id": "4e374431cb68ace4",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "287b33b8879cbbbc",
  "name": "Find regelbrud",
  "rules": [
    {
      "t": "set",
      "p": "errors",
      "pt": "msg",
      "to": "errors @$e.\t(\t    $e.regelbrud ~> $boolean ?\t    {\t        \"cpr\": $e.cpr,\t        \"persondata\": $e.persondata,\t        \"faktura\": $e.faktura,\t        \"regelbrud\": $e.regelbrud\t    }\t)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 700,
  "y": 1980,
  "wires": [
    [
      "5e112e4574f64f9b"
    ]
  ],
  "_order": 577
}

module.exports = Node;