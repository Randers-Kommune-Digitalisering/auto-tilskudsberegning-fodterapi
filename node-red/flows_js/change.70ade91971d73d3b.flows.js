const Node = {
  "id": "70ade91971d73d3b",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "9c4f3569ebca5f7b",
  "name": "Set msg.citizens",
  "rules": [
    {
      "t": "move",
      "p": "pupOutputs.navn",
      "pt": "msg",
      "to": "brugernavn",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "citizens",
      "pt": "msg",
      "to": "pupOutputs",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1260,
  "y": 1260,
  "wires": [
    [
      "81a00971b2ea464e",
      "da332df99f96d858"
    ]
  ],
  "_order": 660
}

module.exports = Node;