const Node = {
  "id": "bc7217d0ea980e39",
  "type": "change",
  "z": "43652557380ac3f3",
  "name": "Find first receipt in category",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "(\t\treq.query.cat in ( $globalContext(\"receipts\") ~> $keys() ) ?\t\t    (($globalContext(\"receipts\") ~> $lookup(req.query.cat)) [archived = false] ) ~> $exists() ?\t    (($globalContext(\"receipts\") ~> $lookup(req.query.cat)) [archived = false] ) [0]\t    :\t    ($globalContext(\"receipts\") ~> $lookup(req.query.cat)) [($globalContext(\"receipts\") ~> $lookup(req.query.cat) ~> $count())-1]\t\t)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 500,
  "y": 1840,
  "wires": [
    [
      "ab18ac7e86e6954a"
    ]
  ],
  "_order": 279
}

module.exports = Node;