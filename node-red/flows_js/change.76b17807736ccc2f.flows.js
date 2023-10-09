const Node = {
  "id": "76b17807736ccc2f",
  "type": "change",
  "z": "36720db510b259f8",
  "name": "Checking data against rules",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload @$p.\t(\t{\t    \"inputObject\": $p,\t\t    \"dataValidation\":\t        $p.data @$pr #$pi.\t        (\t            {\t            \"dataIndex\": $pi,\t            \"dataValue\": $pr,\t            \t            \"rulesChecked\": $rulesChecked :=\t                $p.rules @$r #$i.\t                (\t                    {\t                        \"rule\": $r.name,\t                        \"description\": $r.description,\t                        \"operator\": $r.operator,\t                        \"ruleValue\": $r.value,\t                        \t                        \"isValueRespected\": $valuesRespected := $r.value @$ruleValue. $$.validateData($ruleValue, $r.operator, $pr),\t                        \"isRuleRespected\": (false in $valuesRespected) ? false : true\t                    }\t                ),\t\t            \"rulesBroken\": $rulesBroken := $rulesChecked[$.isRuleRespected = false].rule,\t            \"allRulesRespected\": $rulesBroken ~> $exists() = true ? false : true\t                \t            }\t        )\t}\t)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 460,
  "y": 180,
  "wires": [
    [
      "ed56ae0c8e6569eb"
    ]
  ],
  "_order": 492
}

module.exports = Node;