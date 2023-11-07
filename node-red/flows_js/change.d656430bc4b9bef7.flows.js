const Node = {
  "id": "d656430bc4b9bef7",
  "type": "change",
  "z": "5b815921c9650f17",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "count",
      "pt": "msg",
      "to": "count +1",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "data[$$.count]",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 320,
  "y": 240,
  "wires": [
    [
      "7be173b145756d1c"
    ]
  ],
  "_order": 752
}

module.exports = Node;