const Node = {
  "id": "506b478ece55cff9",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "dc2c5977964e03db",
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
  "x": 1420,
  "y": 2760,
  "wires": [
    [
      "c234c5d1dc7edf71"
    ]
  ],
  "_order": 915
}

module.exports = Node;