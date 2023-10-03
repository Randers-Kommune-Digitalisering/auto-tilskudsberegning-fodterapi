const Node = {
  "id": "6bb832012fc61221",
  "type": "inject",
  "z": "e814d4e251f3dd46",
  "name": "Set payload (data) + rules",
  "props": [
    {
      "p": "payload"
    },
    {
      "p": "testRegex",
      "v": "((((0[1-9]|[12][0-9]|3[01])(0[13578]|10|12)(\\d{2}))|(([0][1-9]|[12][0-9]|30)(0[469]|11)(\\d{2}))|((0[1-9]|1[0-9]|2[0-8])(02)(\\d{2}))|((29)(02)(00))|((29)(02)([2468][048]))|((29)(02)([13579][26])))[-]*\\d{4})",
      "vt": "str"
    },
    {
      "p": "payload.rules",
      "v": "[\t    {\t       \"name\": \"CPRtest\",\t       \"description\": \"CPR number test - matches with any CPR number\",\t       \"operator\": \"containsCPR\"\t    },\t    {\t       \"name\": \"CPRtest2\",\t\t       \"operator\": \"regex\",\t       \"value\": testRegex\t    }\t]",
      "vt": "jsonata"
    },
    {
      "p": "payload.data",
      "v": "[ 500, \"Hello World\", \"1502779995\" ]",
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
  "y": 260,
  "wires": [
    [
      "aac5800a0d7f7d83"
    ]
  ],
  "_order": 956
}

module.exports = Node;