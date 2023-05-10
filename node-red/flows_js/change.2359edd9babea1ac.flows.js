const Node = {
  "id": "2359edd9babea1ac",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "20ed2134d81b57c8",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "webSettings.state.isRunning",
      "pt": "global",
      "to": "false",
      "tot": "bool"
    },
    {
      "t": "delete",
      "p": "payload",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 65,
  "y": 820,
  "wires": [
    [
      "2c999012fa2d0842",
      "08f36899ebeff27b"
    ]
  ],
  "l": false,
  "_order": 347
}

module.exports = Node;