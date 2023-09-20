const Node = {
  "id": "f391aa60d838e929",
  "type": "change",
  "z": "1260b784fb72ac25",
  "g": "f01979f66eef0f15",
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
  "x": 760,
  "y": 200,
  "wires": [
    [
      "d3cc45e5969cbcea"
    ]
  ],
  "_order": 385
}

module.exports = Node;