const Node = {
  "id": "0d73a26952f54d44",
  "type": "change",
  "z": "5bb3204aef17c104",
  "g": "80bf7be9c257b2b0",
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
      "3456ccc4ad7af954"
    ]
  ],
  "_order": 435
}

module.exports = Node;