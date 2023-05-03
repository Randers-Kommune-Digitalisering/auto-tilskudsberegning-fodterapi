const Node = {
  "id": "77e8a8e7f5259bfb",
  "type": "change",
  "z": "c28a486ea3e09387",
  "g": "31b5ea0c53a9c4fb",
  "name": "Merge changes",
  "rules": [
    {
      "t": "set",
      "p": "payload.rules",
      "pt": "msg",
      "to": "$.payload.rules ~> | $ |\t(\t\t\t$ruleChange := $$.ruleUpdates[id = uid];\t/*$lookup($$.ruleChanges, uid);*/\t\t$uid := uid;\t$ruleUpdate :=  $$.payload.ruleUpdates[id = $uid];\t\t{        \t        \"operator\": $ruleUpdate.operator,\t        \"value\": $ruleUpdate.value\t})\t\t|",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "payload.rules",
      "pt": "msg",
      "to": "payload.rules @$r .(\t\t$getType := function($value, $operator)\t{\t    ($value[$ ~> /^[0-9\\.]{1,}$/m] ~> $boolean) ?\t        \"number\" :\t    ($operator = \"!null\") ? \t        \"bool\"\t};\t\t{\t    \t    \"uid\": $r.uid,\t    \"name\": $r.name,\t    \"variable\": $r.variable,\t    \"operator\": $r.operator,\t    \"value\": $r.value,\t    \"type\": $getType($r.value, $r.operator),\t    \"description\": $r.description\t    \t}\t)",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "payload.rules",
      "pt": "msg",
      "to": "$.payload.rules ~> | $ |\t{\t    \"value\": \t        type = \"number\" ?\t            value ~> $number() \t            :\t        type = \"bool\" ?\t            (value = \"true\") or (value = true) ? true : false\t}\t|",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1120,
  "y": 700,
  "wires": [
    [
      "1c365f175b48167a"
    ]
  ],
  "_order": 414
}

module.exports = Node;