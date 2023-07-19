const Node = {
  "id": "5194fc6c80f0bf57",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "d": true,
  "g": "dd8bf1dc973547ed",
  "name": "Sæt msg.citizens",
  "rules": [
    {
      "t": "set",
      "p": "citizens",
      "pt": "msg",
      "to": "$distinct(receipts@$A.(\t[\t    {\t        \"cpr\": $A.patientCPR\t    }\t]))",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "citizen_count",
      "pt": "msg",
      "to": "citizens ~> $count()",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 230,
  "y": 1260,
  "wires": [
    [
      "3934dae1f2a65428"
    ]
  ],
  "_order": 850
}

module.exports = Node;