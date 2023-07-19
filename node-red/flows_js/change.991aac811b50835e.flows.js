const Node = {
  "id": "991aac811b50835e",
  "type": "change",
  "z": "fd98a6615193936d",
  "g": "8cb4f9734833dc8b",
  "name": "Set stdout",
  "rules": [
    {
      "t": "set",
      "p": "stdout",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "stdout.timestamp",
      "pt": "msg",
      "to": "",
      "tot": "date"
    },
    {
      "t": "set",
      "p": "stdout.phase",
      "pt": "msg",
      "to": "initialize",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "stdout.action",
      "pt": "msg",
      "to": "tablename & \" CREATE TABLE query\"",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "stdout.succes",
      "pt": "msg",
      "to": "error ~> $exists() ? false : true",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "stdout.message",
      "pt": "msg",
      "to": "error ~> $exists()  ? \t    \"MySQL error\"   :\t    payload.warningCount > 0    ?\t        \"Table already exists\"  :\t        \"Table created\"",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "stdout.error",
      "pt": "msg",
      "to": "error ~> $exists() ? error.message",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 780,
  "y": 560,
  "wires": [
    [
      "88c050f2b0653fff"
    ]
  ],
  "_order": 439
}

module.exports = Node;