const Node = {
  "id": "198480aeaa7d4649",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "[{\"cpr\":\"123\",\"persondata\":{\"formue\":90000}},{\"cpr\":\"321\",\"persondata\":{\"formue\":99000}},{\"cpr\":\"400\",\"persondata\":{\"tillaegsprocent\":50}},{\"cpr\":\"999\",\"persondata\":{\"formue\":null}}]",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 620,
  "y": 2160,
  "wires": [
    [
      "eae6f78dab0e6ec7"
    ]
  ],
  "_order": 938
}

module.exports = Node;