const Node = {
  "id": "88e4c1ff6d0333f9",
  "type": "change",
  "z": "db94b4c117de2f6a",
  "name": "New webSetting template",
  "rules": [
    {
      "t": "set",
      "p": "webSettings",
      "pt": "global",
      "to": "{\t    \"settings\": {\t        \"idleTimeout\": 1800000\t    },\t\t    \"acceptances\": {\t        \"login\": false,\t        \"rules\": false,\t        \"grants\": false\t    },\t\t    \"state\": {\t        \"isRunning\": false\t    }\t    \t}",
      "tot": "jsonata"
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
  "_order": 198
}

module.exports = Node;