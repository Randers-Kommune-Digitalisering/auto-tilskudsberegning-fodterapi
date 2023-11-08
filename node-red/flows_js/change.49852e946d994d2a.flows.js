const Node = {
  "id": "49852e946d994d2a",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "b0d1827e59500c85",
  "name": "Send alert",
  "rules": [
    {
      "t": "set",
      "p": "message",
      "pt": "msg",
      "to": "Robotten er up-to-date med de seneste fakturaer. Prøv igen i morgen.",
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
      "to": "Ingen nye fakturaer",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 2180,
  "y": 620,
  "wires": [
    [
      "4c096079d3b1b857"
    ]
  ],
  "_order": 617
}

module.exports = Node;