const Node = {
  "id": "4348924059d378e8",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "dd8bf1dc973547ed",
  "name": "Sæt msg.citizens",
  "rules": [
    {
      "t": "move",
      "p": "pupOutputs.navn",
      "pt": "msg",
      "to": "behandlerNavn",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "citizens",
      "pt": "msg",
      "to": "pupOutputs",
      "tot": "msg",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1110,
  "y": 1380,
  "wires": [
    [
      "70088b9148195653",
      "c401932969daa0d6"
    ]
  ],
  "_order": 881
}

module.exports = Node;