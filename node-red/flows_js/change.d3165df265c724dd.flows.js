const Node = {
  "id": "d3165df265c724dd",
  "type": "change",
  "z": "8ea344595d9a442a",
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
      "p": "stdout.phase",
      "pt": "msg",
      "to": "initialize",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "stdout.action",
      "pt": "msg",
      "to": "runHistory[isFinalized = false] ~> $exists() ?\t    \"Kørsel genoptaget\"\t:   \"Kørsel skabt\"",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "stdout.succes",
      "pt": "msg",
      "to": "true",
      "tot": "bool"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 760,
  "y": 480,
  "wires": [
    [
      "4057cf82e6442f23"
    ]
  ],
  "_order": 433
}

module.exports = Node;