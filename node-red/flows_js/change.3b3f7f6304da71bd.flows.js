const Node = {
  "id": "3b3f7f6304da71bd",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "name": "Fjern borgere med regelbrud",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload @ $p .\t(\t    ( errorList[cpr = ($p.cpr ~> $string()) ] ~> $exists ) = false ?\t    {\t        \"cpr\": $p.cpr,\t        \"persondata\": $p.persondata,\t        \"faktura\": $p.faktura\t    }\t)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1620,
  "y": 2420,
  "wires": [
    []
  ],
  "_order": 949
}

module.exports = Node;