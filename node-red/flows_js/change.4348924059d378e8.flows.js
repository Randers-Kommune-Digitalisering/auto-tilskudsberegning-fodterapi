const Node = {
  "id": "4348924059d378e8",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "dd8bf1dc973547ed",
  "name": "Sæt msg.citizens \\n & DQ-sagsbehandler",
  "rules": [
    {
      "t": "move",
      "p": "pupOutputs.navn",
      "pt": "msg",
      "to": "dq_sagsbehandler",
      "tot": "flow"
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
  "x": 1120,
  "y": 1400,
  "wires": [
    [
      "70088b9148195653",
      "c401932969daa0d6"
    ]
  ],
  "_order": 894
}

module.exports = Node;