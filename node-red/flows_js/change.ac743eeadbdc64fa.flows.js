const Node = {
  "id": "ac743eeadbdc64fa",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "name": "Par regel med data",
  "rules": [
    {
      "t": "set",
      "p": "data",
      "pt": "msg",
      "to": "ruleEngineData",
      "tot": "flow",
      "dc": true
    },
    {
      "t": "set",
      "p": "payload.data",
      "pt": "msg",
      "to": "$flowContext('ruleEngineData') ~> $lookup(payload.rules.name)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 970,
  "y": 2380,
  "wires": [
    [
      "4c6c28841e624ff7"
    ]
  ],
  "_order": 946
}

module.exports = Node;