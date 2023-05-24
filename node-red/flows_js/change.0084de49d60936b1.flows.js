const Node = {
  "id": "0084de49d60936b1",
  "type": "change",
  "z": "5bb3204aef17c104",
  "g": "80bf7be9c257b2b0",
  "name": "Merge changes",
  "rules": [
    {
      "t": "move",
      "p": "#:(storeInFile)::grants",
      "pt": "global",
      "to": "payload.grants",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "payload.grants.tilskudsperioder.satser",
      "pt": "msg",
      "to": "$.payload.grants.tilskudsperioder.satser ~> | $ |\t(\t\t$uid := id;\t{        \t    \"tilskud_maxdkk\": $$.payload.data.grantUpdates[$uid].tilskud_maxdkk ~>$number(),\t    \"tilskud_procent\": $$.payload.data.grantUpdates[$uid].tilskud_procent ~>$number()\t})\t\t|",
      "tot": "jsonata"
    },
    {
      "t": "move",
      "p": "payload.grants",
      "pt": "msg",
      "to": "#:(storeInFile)::grants",
      "tot": "global"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1100,
  "y": 1160,
  "wires": [
    [
      "3bd8bc1a401ce6cb"
    ]
  ],
  "_order": 458
}

module.exports = Node;