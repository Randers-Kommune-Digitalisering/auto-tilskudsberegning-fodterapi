const Node = {
  "id": "bce92c775ed24989",
  "type": "inject",
  "z": "e814d4e251f3dd46",
  "name": "Set payload (data) + rules",
  "props": [
    {
      "p": "payload"
    },
    {
      "p": "payload.rules",
      "v": "[\t    {\t       \"name\": \"MoreValueTest\",\t       \"description\": \"No description\",\t       \"operator\": \">\",\t       \"value\": [2,3]\t    }\t]",
      "vt": "jsonata"
    },
    {
      "p": "payload.data",
      "v": "[ 2, 3, 4 ]",
      "vt": "jsonata"
    }
  ],
  "repeat": "",
  "crontab": "",
  "once": false,
  "onceDelay": 0.1,
  "topic": "",
  "payload": "{}",
  "payloadType": "json",
  "x": 250,
  "y": 220,
  "wires": [
    [
      "aac5800a0d7f7d83"
    ]
  ],
  "_order": 962
}

module.exports = Node;