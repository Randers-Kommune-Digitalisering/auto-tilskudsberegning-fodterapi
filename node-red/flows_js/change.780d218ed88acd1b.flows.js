const Node = {
  "id": "780d218ed88acd1b",
  "type": "change",
  "z": "5bb3204aef17c104",
  "g": "63b598a9c0a41f91",
  "name": "Clean response JSON object",
  "rules": [
    {
      "t": "set",
      "p": "payload.data",
      "pt": "msg",
      "to": "$keys(payload.data) = \"object\" ?\tpayload.data.object : payload.data",
      "tot": "jsonata"
    },
    {
      "t": "move",
      "p": "payload.data.requestType",
      "pt": "msg",
      "to": "payload.requestType",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 385,
  "y": 580,
  "wires": [
    [
      "3641e43ccd705cfd",
      "14f03be866dc4bec"
    ]
  ],
  "l": false,
  "_order": 483
}

module.exports = Node;