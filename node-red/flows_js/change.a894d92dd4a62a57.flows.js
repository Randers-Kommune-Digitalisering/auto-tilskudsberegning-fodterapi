const Node = {
  "id": "a894d92dd4a62a57",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "name": "Send status %",
  "rules": [
    {
      "t": "set",
      "p": "message",
      "pt": "msg",
      "to": "Henter persondata fra KP",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "type",
      "pt": "msg",
      "to": "update",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "value",
      "pt": "msg",
      "to": "87",
      "tot": "num"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 2040,
  "y": 2360,
  "wires": [
    [
      "6f3cd6c4165cd279"
    ]
  ],
  "_order": 576
}

module.exports = Node;