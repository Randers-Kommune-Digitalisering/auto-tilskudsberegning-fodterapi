const Node = {
  "id": "492252a377f8d60d",
  "type": "change",
  "z": "c28a486ea3e09387",
  "g": "31b5ea0c53a9c4fb",
  "name": "Merge changes",
  "rules": [
    {
      "t": "set",
      "p": "payload.grants.tilskudsperioder.satser",
      "pt": "msg",
      "to": "$.payload.grants.tilskudsperioder.satser ~> | $ |\t(\t\t$uid := id;\t{        \t    \"tilskud_maxdkk\": $$.payload.grantUpdates[$uid].tilskud_maxdkk ~>$number(),\t    \"tilskud_procent\": $$.payload.grantUpdates[$uid].tilskud_procent ~>$number()\t})\t\t|",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1120,
  "y": 880,
  "wires": [
    [
      "d046f8cb32a0960c"
    ]
  ],
  "_order": 437
}

module.exports = Node;