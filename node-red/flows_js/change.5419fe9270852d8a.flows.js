const Node = {
  "id": "5419fe9270852d8a",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "name": "Find data som regler vedrører",
  "rules": [
    {
      "t": "set",
      "p": "data",
      "pt": "msg",
      "to": "rules @ $rule . {\t    $rule.name: $each($rule, function($v, $k) {\t\t        $k = \"variable\" ?\t        payload.persondata ~> $lookup($v)\t        \t    } )\t} ~> $merge()",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 290,
  "y": 2380,
  "wires": [
    [
      "ca8ae15bdcc586be"
    ]
  ],
  "_order": 938
}

module.exports = Node;