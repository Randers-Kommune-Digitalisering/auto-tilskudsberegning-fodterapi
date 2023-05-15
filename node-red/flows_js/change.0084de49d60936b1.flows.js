const Node = {
  "id": "0084de49d60936b1",
  "type": "change",
  "z": "5bb3204aef17c104",
  "g": "80bf7be9c257b2b0",
  "name": "Merge changes",
  "rules": [
    {
      "t": "set",
      "p": "payload.grants.tilskudsperioder.satser",
      "pt": "msg",
      "to": "$.payload.grants.tilskudsperioder.satser ~> | $ |\t(\t\t$uid := id;\t{        \t    \"tilskud_maxdkk\": $$.payload.data.grantUpdates[$uid].tilskud_maxdkk ~>$number(),\t    \"tilskud_procent\": $$.payload.data.grantUpdates[$uid].tilskud_procent ~>$number()\t})\t\t|",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1140,
  "y": 880,
  "wires": [
    [
      "05e2ac4bd75206d3"
    ]
  ],
  "_order": 454
}

module.exports = Node;