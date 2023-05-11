const Node = {
  "id": "0d73a26952f54d44",
  "type": "change",
  "z": "5bb3204aef17c104",
  "g": "80bf7be9c257b2b0",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "payload.data.toAccept",
      "pt": "msg",
      "to": "(payload.data.toAccept = \"true\") or (payload.data.toAccept= true) ? true : false",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 610,
  "y": 520,
  "wires": [
    [
      "3456ccc4ad7af954"
    ]
  ],
  "_order": 443
}

module.exports = Node;