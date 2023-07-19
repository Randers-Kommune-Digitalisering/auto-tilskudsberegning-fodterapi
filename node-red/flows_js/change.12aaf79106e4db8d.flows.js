const Node = {
  "id": "12aaf79106e4db8d",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "0644ae6c3d5c62e8",
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
  "x": 270,
  "y": 3380,
  "wires": [
    [
      "b98d2d8505e5a715"
    ]
  ],
  "_order": 893
}

module.exports = Node;