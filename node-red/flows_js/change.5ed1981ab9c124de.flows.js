const Node = {
  "id": "5ed1981ab9c124de",
  "type": "change",
  "z": "43652557380ac3f3",
  "name": "danmark",
  "rules": [
    {
      "t": "set",
      "p": "payload.tempData.persondata._danmark",
      "pt": "msg",
      "to": "\"Gruppe \" & payload.tempData.persondata.danmarkgruppe",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1640,
  "y": 220,
  "wires": [
    [
      "a1bf4b6b1875b569"
    ]
  ],
  "_order": 307
}

module.exports = Node;