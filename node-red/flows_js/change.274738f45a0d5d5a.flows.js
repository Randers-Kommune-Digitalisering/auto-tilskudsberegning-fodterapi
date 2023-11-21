const Node = {
  "id": "274738f45a0d5d5a",
  "type": "change",
  "z": "41d1b8798efe7e15",
  "name": "Intialize",
  "rules": [
    {
      "t": "set",
      "p": "pupController",
      "pt": "msg",
      "to": "{\t    \"commands\": payload,\t    \"browserless\": browserless,\t    \"totalActions\": payload ~> $count()\t}",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "pupCount",
      "pt": "flow",
      "to": "0",
      "tot": "num"
    },
    {
      "t": "delete",
      "p": "browserless",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 920,
  "y": 440,
  "wires": [
    [
      "adb383a374c3a116"
    ]
  ],
  "_order": 11
}

module.exports = Node;