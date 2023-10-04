const Node = {
  "id": "bd72d9833f0474c0",
  "type": "change",
  "z": "fd98a6615193936d",
  "d": true,
  "g": "ac4ff4f1ac43ab7f",
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
  "x": 800,
  "y": 260,
  "wires": [
    [
      "116e496028dc159f"
    ]
  ],
  "_order": 400
}

module.exports = Node;