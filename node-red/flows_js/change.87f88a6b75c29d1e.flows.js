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
      "to": "(\t    \t$receiptData := $globalContext(\"receipts\") ~> $exists();\t$koersel := $globalContext(\"webSettings\").state.isRunning;\t$metricserr := $$.webElements.metricErrors ~> $exists();\t\t{\t\t    \"title\":    $koersel or $receiptData ? \t                    \"Igangværende kørsel\" : \t                    \"Start ny kørsel\",\t\t    \"statustext\":   $koersel ? \t                        \"Robotten arbejder\" : \t                    $receiptData ?\t                        \"Nye fakturaer afventer\" :\t                    $metricserr ?\t                        \"Kan ikke oprette forbindelse til \" & $$.webElements.metricErrors :\t                        \"Robotten er klar til at køre\",\t\t    \"subtext\":  $receiptData ?\t                    \"Der er fakturaer som afventer din behandling.\" :\t                $metricserr ?\t                    \"Robotten kan ikke køre før forbindelsen genetableres. Prøv igen senere.\" :\t                    \"Tryk på knappen for at starte en ny kørsel.\",\t    \t    \"status\": $koersel and $receiptData = false ?\t    {\t        \"text\": \"Henter fakturaer\",\t        \"percentage\": 27\t    },\t\t    \"receipts\": $receiptData ?\t                {\t                    \"actions\":\t                    {\t                        \"count\": $globalContext(\"receipts\").actions ~> $count()\t                    },\t                    \"noactions\":\t                    {\t                        \"count\":  $globalContext(\"receipts\").noactions ~> $count()\t                    }\t                },\t\t    \"allowRun\": $metricserr = false ?\t                $koersel = false ?\t                $receiptData = false ?\t                    true\t\t}\t)",
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
  "y": 1260,
  "wires": [
    [
      "11d389fe09aac0b0"
    ]
  ],
  "_order": 362
}

module.exports = Node;