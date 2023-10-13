const Node = {
  "id": "88e4c1ff6d0333f9",
  "type": "change",
  "z": "db94b4c117de2f6a",
  "name": "New webSetting template",
  "rules": [
    {
      "t": "set",
      "p": "payload.webSettings",
      "pt": "msg",
      "to": "{\t    \"settings\": {\t        \"idleTimeout\": 1800000\t    },\t\t    \"acceptances\": {\t        \"login\": false,\t        \"rules\": false,\t        \"grants\": false\t    },\t\t    \"state\": {\t        \"isRunning\": false\t    }\t    \t}",
      "tot": "jsonata"
    },
    {
      "t": "move",
      "p": "payload.webSettings",
      "pt": "msg",
      "to": "webSettings",
      "tot": "global"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 670,
  "y": 160,
  "wires": [
    [
      "bb96674ebd01af04"
    ]
  ],
  "_order": 259
}

module.exports = Node;