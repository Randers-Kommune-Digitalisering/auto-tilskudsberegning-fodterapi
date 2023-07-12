const Node = {
  "id": "35e66215df68100f",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "44e7408f9fee1e77",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "currentRun",
      "pt": "msg",
      "to": "(\t$lastRun :=     runHistory[$count(runHistory)-1]\t ~> $exists() ? runHistory[$count(runHistory)-1];\t\t\trunHistory[isFinalized = false] ~> $exists() ?\t    runHistory[isFinalized = false]\t:\t{\t    \"startDate\": $startDate := ($lastRun ~> $exists() ?\t                    (($lastRun.endDate ~> $toMillis('[D01]/[M01]/[Y0001]')) + 86400000) ~> $fromMillis('[D01]/[M01]/[Y0001]')\t                        : \t                    presetStartDate),\t\t    \"endDate\":  $millis() - ($startDate ~> $toMillis('[D01]/[M01]/[Y0001]')) > (maxDaysPerRun * 86400000) ?\t\t                    (($startDate ~> $toMillis('[D01]/[M01]/[Y0001]')) + 86400000 * maxDaysPerRun) > (presetEndDate ~> $toMillis('[D01]/[M01]/[Y0001]')) ?\t                        presetEndDate\t                        :\t                        (($startDate ~> $toMillis('[D01]/[M01]/[Y0001]')) + 86400000 * maxDaysPerRun) ~> $fromMillis('[D01]/[M01]/[Y0001]')\t                    \t                    : \t                    ($millis() - 86400000) > (presetEndDate ~> $toMillis('[D01]/[M01]/[Y0001]')) ?\t                    presetEndDate\t                    :\t                    (($millis() - 86400000) ~> $fromMillis('[D01]/[M01]/[Y0001]')),\t\t    /*(($millis() - 86400000) ~> $fromMillis('[D01]/[M01]/[Y0001]')), /* 86400000 ms = 1 day */\t                    \t    \"timestamp\": $millis(),\t    \t    \"processedReceipts\": [],\t\t    \"allReceiptsProcessed\": false,\t    \"isFinalized\": false,\t\t    \"currentStep\": {},\t    \"stepHistory\": [],\t    \"userName\": \"\"\t}\t)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1030,
  "y": 320,
  "wires": [
    [
      "40a2d9ad69e69c69"
    ]
  ],
  "_order": 415
}

module.exports = Node;