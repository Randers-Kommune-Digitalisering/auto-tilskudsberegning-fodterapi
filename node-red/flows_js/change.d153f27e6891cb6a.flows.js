const Node = {
  "id": "d153f27e6891cb6a",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "62e182e14c1bade4",
  "name": "TEST \\n ======== \\n SÆT REGLER",
  "rules": [
    {
      "t": "set",
      "p": "rules",
      "pt": "global",
      "to": "[{\"name\":\"Oplyst formue\",\"variable\":\"formue\",\"operator\":\"!null\",\"value\":true,\"description\":\"Borgerens formue skal være oplyst til UDK\"},{\"name\":\"Formuegrænse\",\"variable\":\"formue\",\"operator\":\"<\",\"value\":95800,\"description\":\"Borgerens formue skal være indenfor formuegrænsen\"}]",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 760,
  "y": 140,
  "wires": [
    [
      "065921460d01af70"
    ]
  ],
  "_order": 951
}

module.exports = Node;