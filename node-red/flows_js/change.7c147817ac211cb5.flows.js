const Node = {
  "id": "7c147817ac211cb5",
  "type": "change",
  "z": "5bb3204aef17c104",
  "name": "Format text",
  "rules": [
    {
      "t": "set",
      "p": "data",
      "pt": "msg",
      "to": "payload ~> $count() > 0 ?\t    ( payload @ $obj . (\t        \"<b>#\" &\t        $obj.uid &\t        \"</b>: \" &\t        ($obj.startDate ~> $toMillis ~> $fromMillis(\"[D01]/[M01]-[Y01]\")) & \t        \" → \" &\t        ($obj.endDate  ~> $toMillis ~> $fromMillis(\"[D01]/[M01]-[Y01]\")) &\t        ($obj.runFinalized = 0 ? \" (uafsluttet)\")\t    )\t    ~> $join(\"<br />\") )\t:\t\"Der blev ikke fundet nogen kørselshistorik.\"",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\"data\": data}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 690,
  "y": 2380,
  "wires": [
    [
      "e87e491fbd306cae"
    ]
  ],
  "_order": 727
}

module.exports = Node;