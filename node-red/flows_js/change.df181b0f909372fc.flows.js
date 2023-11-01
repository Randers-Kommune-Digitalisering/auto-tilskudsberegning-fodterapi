const Node = {
  "id": "df181b0f909372fc",
  "type": "change",
  "z": "5bb3204aef17c104",
  "g": "8c06b11e392189b4",
  "name": "Set response",
  "rules": [
    {
      "t": "set",
      "p": "payload.page",
      "pt": "msg",
      "to": "start",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "payload.statusCode",
      "pt": "msg",
      "to": "200",
      "tot": "num"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1450,
  "y": 1300,
  "wires": [
    [
      "e5908679bccd13f4"
    ]
  ],
  "_order": 650
}

module.exports = Node;