const Node = {
  "id": "0fb1a45baf4dcc7c",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "954337fe9fd2e7cc",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "tempData1",
      "pt": "msg",
      "to": "webData[\"citizens-actions\"]",
      "tot": "global"
    },
    {
      "t": "set",
      "p": "tempData2",
      "pt": "msg",
      "to": "webData[\"citizens-noactions\"]",
      "tot": "global"
    },
    {
      "t": "set",
      "p": "tempData",
      "pt": "msg",
      "to": "$append(tempData1, tempData2)",
      "tot": "jsonata"
    },
    {
      "t": "delete",
      "p": "tempData1",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "tempData2",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 660,
  "y": 2780,
  "wires": [
    [
      "fc1053d3105b2cd0"
    ]
  ],
  "_order": 275
}

module.exports = Node;