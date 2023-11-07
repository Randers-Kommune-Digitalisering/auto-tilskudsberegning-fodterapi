const Node = {
  "id": "8078c1890c410bb1",
  "type": "change",
  "z": "5b815921c9650f17",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "data",
      "pt": "msg",
      "to": "payload",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "set",
      "p": "count",
      "pt": "msg",
      "to": "0",
      "tot": "num"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "data[count]",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 560,
  "y": 100,
  "wires": [
    [
      "7be173b145756d1c"
    ]
  ],
  "_order": 748
}

module.exports = Node;