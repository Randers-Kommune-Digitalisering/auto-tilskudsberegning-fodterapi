const Node = {
  "id": "d4b68c86fb92ba75",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "30679eed07d1fb4c",
  "name": "Send alert",
  "rules": [
    {
      "t": "set",
      "p": "message",
      "pt": "msg",
      "to": "Der opstod en uventet fejl under kørslen. Robotten nulstiller sig selv om en kort øjeblik.",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "type",
      "pt": "msg",
      "to": "alert",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "title",
      "pt": "msg",
      "to": "Der opstod en fejl",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 2180,
  "y": 420,
  "wires": [
    [
      "9a241f48583cc63a"
    ]
  ],
  "_order": 614
}

module.exports = Node;