const Node = {
  "id": "216ca83ca59198d3",
  "type": "change",
  "z": "1e8ab76213a40efe",
  "name": "set timeout",
  "rules": [
    {
      "t": "set",
      "p": "requestTimeout",
      "pt": "msg",
      "to": "5000",
      "tot": "num"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 290,
  "y": 180,
  "wires": [
    [
      "649456fb38024313",
      "98db55068fa7e093"
    ]
  ],
  "_order": 530
}

module.exports = Node;