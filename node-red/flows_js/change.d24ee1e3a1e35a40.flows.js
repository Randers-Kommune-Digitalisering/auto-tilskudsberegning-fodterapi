const Node = {
  "id": "d24ee1e3a1e35a40",
  "type": "change",
  "z": "5bb3204aef17c104",
  "g": "e6bee4a694613fda",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload ~> $replace(\"\\n\", \" \")",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 680,
  "y": 500,
  "wires": [
    [
      "c89a0a25da7446df"
    ]
  ],
  "_order": 840
}

module.exports = Node;