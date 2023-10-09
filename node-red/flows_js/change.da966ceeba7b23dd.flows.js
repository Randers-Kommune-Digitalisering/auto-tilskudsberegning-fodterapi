const Node = {
  "id": "da966ceeba7b23dd",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "380e5c7e0ea3778b",
  "name": "Fjern CPR-numre",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "$.payload ~> |$|\t{\t    \"cpr\": \t           (cpr ~>\t           $split(\"-\"))[0]\t}\t|",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "$.payload ~> |$.faktura|\t{\t    \"patientCPR\": \t           (patientCPR ~>\t           $split(\"-\"))[0]\t}\t|",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "errors",
      "pt": "msg",
      "to": "$.errors ~> |$|\t{\t    \"cpr\": \t           (cpr ~>\t           $split(\"-\"))[0]\t}\t|",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "errors",
      "pt": "msg",
      "to": "$.errors ~> |$.faktura|\t{\t    \"patientCPR\": \t           (patientCPR ~>\t           $split(\"-\"))[0]\t}\t|",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 390,
  "y": 2660,
  "wires": [
    [
      "a46e2a0c2cd58d9f"
    ]
  ],
  "_order": 542
}

module.exports = Node;