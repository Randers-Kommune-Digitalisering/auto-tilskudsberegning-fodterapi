const Node = {
  "id": "215c708ef9319356",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "287b33b8879cbbbc",
  "name": "Hent regler fra global variabel",
  "rules": [
    {
      "t": "set",
      "p": "rules",
      "pt": "msg",
      "to": "#:(storeInFile)::rules",
      "tot": "global"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 810,
  "y": 1320,
  "wires": [
    [
      "4c51b10755b92b07"
    ]
  ],
  "_order": 301
}

module.exports = Node;