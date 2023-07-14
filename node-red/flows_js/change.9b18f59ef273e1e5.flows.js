const Node = {
  "id": "9b18f59ef273e1e5",
  "type": "change",
  "z": "fd98a6615193936d",
  "name": "Beregn startdato \\n og slutdato",
  "rules": [
    {
      "t": "set",
      "p": "newRun",
      "pt": "msg",
      "to": "(\t$lastRun := payload[0] ~> $exists() ?\t            payload[0];\t\t\t{\t    \"startDate\": $startDate := ($lastRun ~> $exists() ?\t                    (($lastRun.endDate ~> $toMillis('[Y0001]-[M01]-[D01]')) + 86400000) ~> $fromMillis('[Y0001]-[M01]-[D01]')\t                    : \t                    presetStartDate),\t\t    \"endDate\":  $millis() - ($startDate ~> $toMillis('[Y0001]-[M01]-[D01]')) > (maxDaysPerRun * 86400000) ?\t\t                    (($startDate ~> $toMillis('[Y0001]-[M01]-[D01]')) + 86400000 * maxDaysPerRun) > (presetEndDate ~> $toMillis('[Y0001]-[M01]-[D01]')) ?\t                        presetEndDate\t                        :\t                        (($startDate ~> $toMillis('[Y0001]-[M01]-[D01]')) + 86400000 * maxDaysPerRun) ~> $fromMillis('[Y0001]-[M01]-[D01]')\t                    \t                    : \t                    ($millis() - 86400000) > (presetEndDate ~> $toMillis('[Y0001]-[M01]-[D01]')) ?\t                        presetEndDate\t                        :\t                        (($millis() - 86400000) ~> $fromMillis('[Y0001]-[M01]-[D01]'))\t\t}\t)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 570,
  "y": 1160,
  "wires": [
    [
      "cde9e5d83ad62f78"
    ]
  ],
  "_order": 356
}

module.exports = Node;