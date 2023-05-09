const Node = {
  "id": "88e4c1ff6d0333f9",
  "type": "change",
  "z": "db94b4c117de2f6a",
  "name": "New setting template",
  "rules": [
    {
      "t": "set",
      "p": "payload.webSettings",
      "pt": "msg",
      "to": "{\t    \"settings\": {\t        \"idleTimeout\": 1800000\t    },\t\t    \"acceptances\": {\t        \"login\": false,\t        \"rules\": false,\t        \"grants\": false\t    },\t\t    \"state\": {\t        \"isRunning\": false,\t        \"lastStep\": {},\t        \"lastState\": {}\t    },\t\t    \"currentSession\": {\t        \"isConnected\": \"n/a\",\t        \"lastPingMillis\": 0\t    }\t    \t}",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "webData",
      "pt": "global",
      "to": "\t{\t    \"workletCreds\": {\t        \"workletUser\": \"\",\t        \"workletPass\": \"\"\t    }, \"startedRunThisInstance\": false\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 560,
  "y": 320,
  "wires": [
    [
      "7e2c077d488fba02"
    ]
  ],
  "_order": 115
}

module.exports = Node;