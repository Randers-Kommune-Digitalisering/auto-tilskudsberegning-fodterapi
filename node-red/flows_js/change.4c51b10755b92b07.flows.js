const Node = {
  "id": "4c51b10755b92b07",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "287b33b8879cbbbc",
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
  "x": 750,
  "y": 1940,
  "wires": [
    [
      "4e374431cb68ace4"
    ]
  ],
  "_order": 627
}

module.exports = Node;