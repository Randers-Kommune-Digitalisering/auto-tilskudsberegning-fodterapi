const Node = {
  "id": "c1760a4f57b3a889",
  "type": "change",
  "z": "43652557380ac3f3",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "runHistoryReverse",
      "pt": "msg",
      "to": "$globalContext(\"runHistory\", \"storeInFile\") ~> $reverse",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 780,
  "y": 1020,
  "wires": [
    [
      "74cd38d81e06eb6b"
    ]
  ],
  "_order": 235
}

module.exports = Node;