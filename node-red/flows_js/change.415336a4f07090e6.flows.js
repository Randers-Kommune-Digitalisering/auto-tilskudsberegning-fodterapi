const Node = {
  "id": "415336a4f07090e6",
  "type": "change",
  "z": "c28a486ea3e09387",
  "g": "31b5ea0c53a9c4fb",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "payload.toAccept",
      "pt": "msg",
      "to": "(payload.toAccept = \"true\") or (payload.toAccept= true) ? true : false",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 590,
  "y": 520,
  "wires": [
    [
      "92fc21540237b9c7"
    ]
  ],
  "_order": 419
}

module.exports = Node;