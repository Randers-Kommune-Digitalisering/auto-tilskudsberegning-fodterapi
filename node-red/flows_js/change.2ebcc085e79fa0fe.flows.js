const Node = {
  "id": "2ebcc085e79fa0fe",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "947838261d7c3e0b",
  "name": "Send message",
  "rules": [
    {
      "t": "set",
      "p": "message",
      "pt": "msg",
      "to": "Ingen nye fakturaer blev fundet for den valgte periode. Prøv evt. at køre robotten igen.",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "type",
      "pt": "msg",
      "to": "message",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "title",
      "pt": "msg",
      "to": "Ingen fakturaer blev fundet",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 2150,
  "y": 820,
  "wires": [
    [
      "68a983a86f71791d"
    ]
  ],
  "_order": 607
}

module.exports = Node;