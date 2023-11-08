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
  "x": 1105,
  "y": 280,
  "wires": [
    [
      "587e4590e8516870",
      "dbe0aab1907c2095"
    ]
  ],
  "l": false,
  "_order": 682
}

module.exports = Node;