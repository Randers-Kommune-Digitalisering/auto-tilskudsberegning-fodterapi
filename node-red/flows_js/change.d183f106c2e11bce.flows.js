const Node = {
  "id": "d183f106c2e11bce",
  "type": "change",
  "z": "8ea344595d9a442a",
  "d": true,
  "g": "9c4f3569ebca5f7b",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "citizens",
      "pt": "msg",
      "to": "$distinct(receipts@$A.(\t[\t    {\t        \"cpr\": $A.patientCPR\t    }\t]))",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 440,
  "y": 820,
  "wires": [
    [
      "bc99d7022f61a990"
    ]
  ],
  "_order": 348
}

module.exports = Node;