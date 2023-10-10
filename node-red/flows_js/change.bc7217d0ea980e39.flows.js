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
      "to": "(\treq.query.cat in ( $globalContext(\"receipts\") ~> $keys() ) ?\t\t    ( $globalContext(\"receipts\") ~> $lookup(req.query.cat) ) [archived = false]\t\t) [0]",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 500,
  "y": 2020,
  "wires": [
    [
      "ab18ac7e86e6954a"
    ]
  ],
  "_order": 415
}

module.exports = Node;