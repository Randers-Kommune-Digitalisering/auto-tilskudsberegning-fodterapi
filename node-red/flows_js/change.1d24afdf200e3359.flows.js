const Node = {
  "id": "1d24afdf200e3359",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "name": "Par regel med data",
  "rules": [
    {
      "t": "set",
      "p": "payload.cpr",
      "pt": "msg",
      "to": "$flowContext('ruleEngineData') ~> $lookup(payload.rules.name) ~> $each(function($v, $k)\t{\t    $k\t})",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "payload.data",
      "pt": "msg",
      "to": "$flowContext('ruleEngineData') ~> $lookup(payload.rules.name) ~> $each(function($v, $k)\t{\t    $v\t})",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 930,
  "y": 2380,
  "wires": [
    [
      "ffab9ecbb1965be1"
    ]
  ],
  "_order": 944
}

module.exports = Node;