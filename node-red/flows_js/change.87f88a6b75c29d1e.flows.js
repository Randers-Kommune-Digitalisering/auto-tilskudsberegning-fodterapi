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
      "to": "(\t    \t$receiptData := $globalContext(\"receipts\") ~> $exists();\t$koersel := $globalContext(\"webSettings\").state.isRunning;\t$metricserr := $$.webElements.metricErrors ~> $exists();\t$unarchivedReceipts := (([] ~> $append($globalContext(\"receipts\").actions) ~> $append($globalContext(\"receipts\").noactions))[archived = false] ~> $count());\t\t{\t\t    \"title\":    $koersel or $receiptData ? \t                    \"Igangværende kørsel\" : \t                    \"Start ny kørsel\",\t\t    \"statustext\":   $koersel ? \t                        \"Robotten arbejder\" : \t                    $receiptData and $unarchivedReceipts = 0 ?\t                        \"Alle fakturaer behandlet\" :\t                    $receiptData ?\t                        \"Nye fakturaer afventer\" :\t                    $metricserr ?\t                        \"Kan ikke oprette forbindelse til \" & $$.webElements.metricErrors :\t                        \"Robotten er klar til at køre\",\t\t    \"subtext\":  $receiptData and $unarchivedReceipts = 0 ?\t                    \"Afslut kørslen ved at trykke \\\"Afslut kørsel\\\".\" :\t                $receiptData ?\t                    \"Der er fakturaer som afventer din behandling.\" :\t                $metricserr ?\t                    \"Robotten kan ikke køre før forbindelsen genetableres. Prøv igen senere.\" :\t                    \"Tryk på knappen for at starte en ny kørsel.\",\t    \t    \"status\": $koersel and $receiptData = false ?\t    {\t        \"text\": $globalContext(\"webSettings\").state.progression.message,\t        \"percentage\": $globalContext(\"webSettings\").state.progression.value\t    },\t\t    \"receipts\": $receiptData ?\t                {\t                    \"actions\":\t                    {\t                        \"count\": $globalContext(\"receipts\").actions[archived = false] ~> $count()\t                    },\t                    \"noactions\":\t                    {\t                        \"count\":  $globalContext(\"receipts\").noactions[archived = false] ~> $count()\t                    }\t                },\t\t    \"allowRun\": $metricserr = false ?\t                $koersel = false ?\t                $receiptData = false ?\t                    true,\t\t    \"completeRun\": $receiptData = true and $unarchivedReceipts = 0 ?\t                    {\t                        \"text\": \"Afslut kørsel\"\t                    }\t\t}\t)",
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
  "y": 1080,
  "wires": [
    [
      "11d389fe09aac0b0"
    ]
  ],
  "_order": 366
}

module.exports = Node;