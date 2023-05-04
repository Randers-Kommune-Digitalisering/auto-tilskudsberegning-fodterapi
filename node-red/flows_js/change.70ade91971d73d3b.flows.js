const Node = {
  "id": "70ade91971d73d3b",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "9c4f3569ebca5f7b",
  "name": "",
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
  "x": 1220,
  "y": 820,
  "wires": [
    [
      "81a00971b2ea464e",
      "172fe34eeccca8dd",
      "98bc3b2a3f851a56"
    ]
  ],
  "_order": 353
}

module.exports = Node;