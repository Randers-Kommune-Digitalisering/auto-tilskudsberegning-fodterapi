const Node = {
  "id": "2cb0b4e9a7bba465",
  "type": "change",
  "z": "5bb3204aef17c104",
  "g": "80bf7be9c257b2b0",
  "name": "Merge changes",
  "rules": [
    {
      "t": "move",
      "p": "#:(storeInFile)::rules",
      "pt": "global",
      "to": "payload.rules",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "payload.rules",
      "pt": "msg",
      "to": "$.payload.rules ~> | $ |\t(\t\t$uid := uid;\t$ruleUpdate :=  $$.payload.data.ruleUpdates[id = $uid];\t\t{        \t        \"operator\": $ruleUpdate.operator,\t        \"value\": $ruleUpdate.value\t})\t\t|",
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
    },
    {
      "t": "move",
      "p": "rules",
      "pt": "msg",
      "to": "#:(storeInFile)::rules",
      "tot": "global"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1100,
  "y": 980,
  "wires": [
    [
      "8086c52505c2c8d5"
    ]
  ],
  "_order": 722
}

module.exports = Node;