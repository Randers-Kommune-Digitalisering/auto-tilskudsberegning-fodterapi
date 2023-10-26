const Node = {
  "id": "1fb526008f8f86bf",
  "type": "change",
  "z": "db94b4c117de2f6a",
  "name": "New webData template",
  "rules": [
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
  "_order": 202
}

module.exports = Node;