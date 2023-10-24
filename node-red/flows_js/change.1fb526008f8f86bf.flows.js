const Node = {
  "id": "1fb526008f8f86bf",
  "type": "change",
  "z": "db94b4c117de2f6a",
  "name": "New webData template",
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
    },
    {
      "t": "set",
      "p": "webData",
      "pt": "global",
      "to": "\t{\t    \"workletCreds\": {},\t    \"dqCreds\": {}\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 670,
  "y": 280,
  "wires": [
    [
      "4b11c5de970ad45a"
    ]
  ],
  "_order": 198
}

module.exports = Node;