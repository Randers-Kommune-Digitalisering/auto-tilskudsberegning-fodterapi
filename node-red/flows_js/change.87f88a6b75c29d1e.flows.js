const Node = {
  "id": "87f88a6b75c29d1e",
  "type": "change",
  "z": "43652557380ac3f3",
  "name": "Kørselsdata",
  "rules": [
    {
      "t": "set",
      "p": "webElements.currentRun",
      "pt": "msg",
      "to": "(\t    $koersel := false;\t{\t    \"title\": $koersel ? \"Igangværende kørsel\" : \"Start ny kørsel\",\t    \"statustext\": $koersel ? \"Robotten arbejder ...\" : \"Robotten er klar til at køre\",\t    \"status\": $koersel ? {\t        \"text\": \"Henter fakturaer\",\t        \"percentage\": 27\t    }\t}\t)",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "webElements.runHistory",
      "pt": "msg",
      "to": "{\"title\":\"Kørselshistorik\",\"lastRun\":\"24/09-2023\"}",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 450,
  "y": 1240,
  "wires": [
    [
      "11d389fe09aac0b0"
    ]
  ],
  "_order": 357
}

module.exports = Node;