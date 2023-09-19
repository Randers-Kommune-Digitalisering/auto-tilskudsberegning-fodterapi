const Node = {
  "id": "d153f27e6891cb6a",
  "type": "change",
  "z": "f99fd88fa65c74b9",
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
  "x": 1460,
  "y": 300,
  "wires": [
    [
      "714da3a00ef445ae"
    ]
  ],
  "_order": 938
}

module.exports = Node;