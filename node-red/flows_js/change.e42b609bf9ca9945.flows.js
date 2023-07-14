const Node = {
  "id": "e42b609bf9ca9945",
  "type": "change",
  "z": "25b4c5bead5231de",
  "g": "6e22e41290516ce8",
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
  "x": 660,
  "y": 320,
  "wires": [
    [
      "a9b79147013b6024"
    ]
  ],
  "_order": 786
}

module.exports = Node;