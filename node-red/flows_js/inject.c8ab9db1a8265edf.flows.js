const Node = {
  "id": "c8ab9db1a8265edf",
  "type": "inject",
  "z": "e814d4e251f3dd46",
  "name": "Set payload (data) + rules",
  "props": [
    {
      "p": "payload"
    },
    {
      "p": "payload.rules",
      "v": "[\t    {\t       \"name\": \"MoreValueStringTest\",\t       \"description\": \"No description\",\t       \"operator\": \"contains\",\t       \"value\": [\"world\", \"hello\"]\t    }\t]",
      "vt": "jsonata"
    },
    {
      "p": "payload.data",
      "v": "[ \"Hello\", \"hello world\", \"Hello World\" ]",
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
  "y": 180,
  "wires": [
    [
      "aac5800a0d7f7d83"
    ]
  ],
  "_order": 957
}

module.exports = Node;