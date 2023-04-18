const Node = {
  "id": "6ec1d89f4bc267a3",
  "type": "change",
  "z": "db94b4c117de2f6a",
  "name": "New states",
  "rules": [
    {
      "t": "set",
      "p": "webStates",
      "pt": "global",
      "to": "[\t    {\t        \"title\": \"idle\",\t        \"id\": 0,\t        \"result\": [\"ready\", \"completed\"]\t    },\t    \t    {\t        \"title\": \"running\",\t        \"id\": 1,\t        \"result\": \"busy\"\t    },\t\t    {\t        \"title\": \"unavailable\",\t        \"id\": 2,\t        \"result\": \"no response\"\t    }\t]",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "webSteps",
      "pt": "global",
      "to": "[{\"title\":\"initialization\",\"id\":0,\"state\":{},\"lastResult\":null},{\"title\":\"extract-worklet\",\"id\":1,\"state\":{},\"lastResult\":null},{\"title\":\"data-split\",\"id\":2,\"state\":{},\"lastResult\":null},{\"title\":\"extract-kp\",\"id\":3,\"state\":{},\"lastResult\":null},{\"title\":\"transform\",\"id\":4,\"state\":{},\"lastResult\":null},{\"title\":\"load\",\"id\":5,\"state\":{},\"lastResult\":null}]",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "payload.webStates",
      "pt": "msg",
      "to": "webStates",
      "tot": "global"
    },
    {
      "t": "set",
      "p": "payload.webSteps",
      "pt": "msg",
      "to": "webSteps",
      "tot": "global"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 830,
  "y": 120,
  "wires": [
    [
      "eae97dc11278dc8c"
    ]
  ],
  "_order": 200
}

module.exports = Node;