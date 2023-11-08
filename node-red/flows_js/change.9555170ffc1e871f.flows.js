const Node = {
  "id": "9555170ffc1e871f",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "7259557bf9adb316",
  "name": "Find data som regler vedrører",
  "rules": [
    {
      "t": "set",
      "p": "data",
      "pt": "msg",
      "to": "rules @ $rule . {\t\t    $rule.name: \t\t    payload @ $citizen . { \t        \t        $citizen.cpr ~> $string:\t\t            $rule.variable in $keys($citizen.persondata) ?\t            $lookup($citizen.persondata, $rule.variable) : null\t        \t    } ~> $merge()\t    \t} ~> $merge()\t\t\t/*\trules @ $rule . {\t    $rule.name: $each($rule, function($v, $k) {\t\t        $k = \"variable\" ?\t        payload.persondata ~> $lookup($v)\t        \t    } )\t} ~> $merge()*/",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 270,
  "y": 2520,
  "wires": [
    [
      "21beda132648a953"
    ]
  ],
  "_order": 528
}

module.exports = Node;