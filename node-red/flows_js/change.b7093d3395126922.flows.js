const Node = {
  "id": "b7093d3395126922",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "b9fbf47404627f86",
  "name": "Set stdout",
  "rules": [
    {
      "t": "set",
      "p": "stdout",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "stdout.timestamp",
      "pt": "msg",
      "to": "",
      "tot": "date"
    },
    {
      "t": "set",
      "p": "stdout.phase",
      "pt": "msg",
      "to": "transform_1_convertRawData",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "stdout.action",
      "pt": "msg",
      "to": "JSONata parsing fejl",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "stdout.error",
      "pt": "msg",
      "to": "payload.error",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "stdout.source",
      "pt": "msg",
      "to": "payload.source",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "stdout.succes",
      "pt": "msg",
      "to": "false",
      "tot": "bool"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1560,
  "y": 2260,
  "wires": [
    [
      "9924d813566c6aa6"
    ]
  ],
  "_order": 983
}

module.exports = Node;