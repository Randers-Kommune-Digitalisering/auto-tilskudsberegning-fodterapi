const Node = {
  "id": "b06ecebe9c2ea894",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "2324a12126e9564c",
  "name": "Tilføj til runHistory",
  "rules": [
    {
      "t": "set",
      "p": "receipts",
      "pt": "global",
      "to": "{\t    \"actions\": payload,\t    \"noactions\": errorList\t}",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "newHistoryItem",
      "pt": "msg",
      "to": "currentRun",
      "tot": "flow",
      "dc": true
    },
    {
      "t": "set",
      "p": "newHistoryItem",
      "pt": "msg",
      "to": "newHistoryItem ~> | $ | {\t\t    \"startDate\": startDate ~> $toMillis ~> $fromMillis(\"[D01]/[M01]-[Y01]\"),\t    \"endDate\": startDate ~> $toMillis ~> $fromMillis(\"[D01]/[M01]-[Y01]\"),\t    \"runStarted\": $millis() ~> $fromMillis(\"[D01]/[M01]-[Y01]\"),\t    \"lastUpdated\": $millis() ~> $toMillis ~> $fromMillis(\"[D01]/[M01]-[Y01]\"),\t    \"userStartedRun\": dqUser,\t    \"runFinalized\": runFinalized = false ? \"Kørsel afsluttet\" : \"Igangværende kørsel\"\t\t} |",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "runHistory",
      "pt": "global",
      "to": "( [] ~> $append( $globalContext(\"runHistory\") ) ) ~> $append(newHistoryItem)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1170,
  "y": 420,
  "wires": [
    [
      "714da3a00ef445ae"
    ]
  ],
  "_order": 614
}

module.exports = Node;