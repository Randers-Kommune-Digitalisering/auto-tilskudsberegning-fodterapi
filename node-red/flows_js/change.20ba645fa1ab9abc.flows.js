const Node = {
  "id": "20ba645fa1ab9abc",
  "type": "change",
  "z": "36720db510b259f8",
  "name": "Set custom rules + expressions",
  "rules": [
    {
      "t": "set",
      "p": "regexLib",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "regexLib.cpr",
      "pt": "msg",
      "to": "((((0[1-9]|[12][0-9]|3[01])(0[13578]|10|12)(\\d{2}))|(([0][1-9]|[12][0-9]|30)(0[469]|11)(\\d{2}))|((0[1-9]|1[0-9]|2[0-8])(02)(\\d{2}))|((29)(02)(00))|((29)(02)([2468][048]))|((29)(02)([13579][26])))[-]*\\d{4})",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "$.payload ~> |$.rules| (\t{\t\t\"value\":\t    operator = \"containsCPR\" ?\t        $$.regexLib.cpr\t    \t}\t)|",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 270,
  "y": 100,
  "wires": [
    [
      "7b6d9dedc6b2bf02"
    ]
  ],
  "_order": 372
}

module.exports = Node;