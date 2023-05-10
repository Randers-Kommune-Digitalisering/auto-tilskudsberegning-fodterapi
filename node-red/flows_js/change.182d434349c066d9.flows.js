const Node = {
  "id": "182d434349c066d9",
  "type": "change",
  "z": "a1b347492c77827f",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "url",
      "pt": "msg",
      "to": "http://browserless:3000/sessions",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "headers",
      "pt": "msg",
      "to": "{\t   \"accept\": \"application/json\"\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 640,
  "y": 940,
  "wires": [
    [
      "a2ab54cdddcdb7f5"
    ]
  ],
  "_order": 489
}

module.exports = Node;