const Node = {
  "id": "578427e006b393b6",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "dc2c5977964e03db",
  "name": "Tjek alle regler mod borgerdata",
  "rules": [
    {
      "t": "set",
      "p": "errors",
      "pt": "msg",
      "to": "payload @$p.\t(\t$respectsRule := function($rule, $value)\t{\t    $rule.operator = \"!null\" ?\t        $value != null\t    :\t    $value = null ?\t        false\t    :\t    $rule.operator = \"<\" ?\t        $value < $rule.value\t    :\t    $rule.operator = \">\" ?\t        $value > $rule.value\t    :\t    $rule.operator = \"==\" ?\t        $value = $rule.value\t    :\t    $rule.operator = \"!=\" ?\t        $value != $rule.value\t    :\t    $rule.operator = \"contains\" ?\t        ($contains($string($rule.value), $string($value)))\t    :\t    $rule.operator = \"!contains\" ?\t        ($contains($string($rule.value), $string($value)) ? false : true)\t};\t{\t    \"cpr\": $p.cpr,\t    \"persondata\": $p.persondata,\t    \"faktura\": $p.faktura,\t\t    \"regelbrud\":\t        rules @$r.\t        (\t            $respectsRule($r, $data := $lookup($p.persondata, $r.variable)) = false ?\t            {\t                \"rule\": $r.name,\t                \"description\": $r.description,\t                \"objectValue\": $data,\t                \"operator\": $r.operator,\t                \"expectedValue\": $r.value,\t                \"isRespected\": $respectsRule($r, $data)\t            }\t        )\t}\t)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1470,
  "y": 2720,
  "wires": [
    [
      "506b478ece55cff9"
    ]
  ],
  "_order": 918
}

module.exports = Node;