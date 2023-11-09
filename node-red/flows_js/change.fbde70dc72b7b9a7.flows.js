const Node = {
  "id": "fbde70dc72b7b9a7",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "ac8c86427665f81e",
  "name": "Calc %",
  "rules": [
    {
      "t": "set",
      "p": "count",
      "pt": "msg",
      "to": "count+1",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "percentage",
      "pt": "msg",
      "to": "count * 2",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "percentage",
      "pt": "msg",
      "to": "percentage > 15 ? 15 : percentage",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 660,
  "y": 1100,
  "wires": [
    [
      "39a8ebd6f97b76c0"
    ]
  ],
  "_order": 634
}

module.exports = Node;