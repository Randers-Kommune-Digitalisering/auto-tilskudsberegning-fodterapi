const Node = {
  "id": "d4b68c86fb92ba75",
  "type": "change",
  "z": "f99fd88fa65c74b9",
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
  "x": 1930,
  "y": 280,
  "wires": [
    [
      "cadd93e4506ebed4"
    ]
  ],
  "_order": 587
}

module.exports = Node;