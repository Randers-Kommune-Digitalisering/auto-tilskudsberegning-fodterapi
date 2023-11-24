const Node = {
  "id": "4f97ac1f3bb2708a",
  "type": "change",
  "z": "449328c1ffbe7d56",
  "name": "Sager",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "$.payload ~> |$.persondata|(\t\t$faktura_dato := $$.payload[cpr = cpr].faktura[0].dato ~> $toMillis();\t\t$sager_split := sager\t    ~> $replace(\"\\n\", \"\")\t    ~> $replace(\"\\t\\t\", \"\\t\")\t    ~> $substringAfter(\"\\t\")\t    ~> $split(\"\\t\");\t{\t    \"sager\": $sager_split #$i .(\t\t        /* Hvis kolonne-antal ændrer sig, breaker denne kode */\t\t        $i % 5 = 0 and $i != 0 ?\t        {\t            \"titel\": $sager_split[$i],\t            \t            \"type\": $sager_split[$i+1],\t\t            \"fra\": $sager_split[$i+2]\t                ~> $toMillis('[D01]-[M01]-[Y0001]')\t                ~> $fromMillis('[Y0001]-[M01]-[D01]'),\t\t            \"til\": $til := ($sager_split[$i+3]\t                ~> $toMillis('[D01]-[M01]-[Y0001]')\t                ~> $fromMillis('[Y0001]-[M01]-[D01]')),\t\t            \"aktiv\": ($til ~> $boolean()) ? ( $til ~> $toMillis() > $faktura_dato ? true : false ) : true,\t\t            \"bevilling\": ($sager_split[$i+4] = \"Bevilget\")\t        })\t\t    }\t)|",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1070,
  "y": 120,
  "wires": [
    [
      "f186dccb8d8c8992"
    ]
  ],
  "info": "",
  "_order": 360
}

Node.info = `
https://try.jsonata.org/4J8IPRU83
`

module.exports = Node;