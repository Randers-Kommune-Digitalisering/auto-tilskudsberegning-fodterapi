const Node = {
  "id": "d183f106c2e11bce",
  "type": "change",
  "z": "8ea344595d9a442a",
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
  "x": 380,
  "y": 1300,
  "wires": [
    [
      "6f70a9263a101b22"
    ]
  ],
  "_order": 434
}

module.exports = Node;