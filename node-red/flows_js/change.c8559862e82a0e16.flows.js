const Node = {
  "id": "c8559862e82a0e16",
  "type": "change",
  "z": "5bb3204aef17c104",
  "name": "Formater data",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload ~> | $ | {\t\t    \"startDate\": startDate ~> $toMillis ~> $fromMillis(\"[D01]/[M01]-[Y01]\"),\t    \"endDate\": startDate ~> $toMillis ~> $fromMillis(\"[D01]/[M01]-[Y01]\"),\t    \"runStarted\": runStarted ~> $toMillis ~> $fromMillis(\"[D01]/[M01]-[Y01]\"),\t    \"lastUpdated\": lastUpdated ~> $toMillis ~> $fromMillis(\"[D01]/[M01]-[Y01]\"),\t    \"runFinalized\": runFinalized = 1 ? \"Kørsel afsluttet\" : \"Igangværende kørsel\"\t\t} |",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 900,
  "y": 2080,
  "wires": [
    [
      "ad8ada6cc5bf5e02"
    ]
  ],
  "_order": 716
}

module.exports = Node;