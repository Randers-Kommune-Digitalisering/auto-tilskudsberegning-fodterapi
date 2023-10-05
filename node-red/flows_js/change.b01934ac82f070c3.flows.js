const Node = {
  "id": "b01934ac82f070c3",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "287b33b8879cbbbc",
  "name": "Bevilget tilskud til fodpleje?",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "$.payload ~> |$.persondata|\t{\t\"bevilling\":\t    bevilling \t    ~> $contains(\"fodpleje\")\t}|",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 420,
  "y": 1860,
  "wires": [
    [
      "64bc816ed683fb56"
    ]
  ],
  "_order": 600
}

module.exports = Node;