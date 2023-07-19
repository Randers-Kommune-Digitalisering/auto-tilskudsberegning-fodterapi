const Node = {
  "id": "93b93458806ecf6a",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "f0775df5510c6dd0",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "errorList",
      "pt": "msg",
      "to": "payload[ persondata ~> $exists() = false\t            or\t         persondata = {}\t            or\t         persondata.personligtillaegsprocent = null ]",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 530,
  "y": 1900,
  "wires": [
    [
      "57c822776ccc4195"
    ]
  ],
  "_order": 961
}

module.exports = Node;