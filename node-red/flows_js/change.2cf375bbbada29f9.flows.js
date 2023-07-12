const Node = {
  "id": "2cf375bbbada29f9",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "287b33b8879cbbbc",
  "name": "Sager",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "$.payload ~> |$.persondata|(\t\t$sager_split := sager\t    ~> $replace(\"\\n\", \"\")\t    ~> $replace(\"\\t\\t\", \"\\t\")\t    ~> $substringAfter(\"\\t\")\t    ~> $split(\"\\t\");\t{\t    \"sager\": $sager_split #$i .(\t\t        /* Hvis kolonne-antal ændrer sig, breaker denne kode */\t\t        $i % 5 = 0 and $i != 0 ?\t        {\t            \"titel\": $sager_split[$i],\t            \t            \"type\": $sager_split[$i+1],\t\t            \"fra\": $sager_split[$i+2]\t                ~> $toMillis('[D01]-[M01]-[Y0001]')\t                ~> $fromMillis('[Y0001]-[M01]-[D01]'),\t\t            \"til\": $til := ($sager_split[$i+3]\t                ~> $toMillis('[D01]-[M01]-[Y0001]')\t                ~> $fromMillis('[Y0001]-[M01]-[D01]')),\t\t            \"aktiv\": ($til ~> $boolean()) ? ( $til ~> $toMillis() > $millis() ? true : false ) : true,\t\t            \"bevilling\": ($sager_split[$i+4] = \"Bevilget\")\t        })\t\t    }\t)|",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 350,
  "y": 1980,
  "wires": [
    [
      "12d9ffdfaf71a523"
    ]
  ],
  "info": "",
  "_order": 338
}

Node.info = `
https://try.jsonata.org/4J8IPRU83
`

module.exports = Node;