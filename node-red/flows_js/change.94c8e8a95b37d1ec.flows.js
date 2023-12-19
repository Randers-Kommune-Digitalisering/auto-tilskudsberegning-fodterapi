const Node = {
  "id": "94c8e8a95b37d1ec",
  "type": "change",
  "z": "449328c1ffbe7d56",
  "name": "Helbredstillægsprocenter",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "$.payload ~> |$.persondata|(\t\t$tillaegsprocent_split := helbredstillaegsprocent\t    ~> $replace(\"Helbredstillægsprocent\\tGyldig fra\\tGyldig til\\tAjourføringsdato\\n\", \"\")\t    ~> $split(\"\\n\");\t{\t\t\"helbredstillaegsprocent\": $tillaegsprocent_split #$i .{\t\t    \"dato_fra\": ($tillaegsprocent_split[$i]\t        ~> $split(\"\\t\"))[1]\t        ~> $toMillis('[D01]-[M01]-[Y0001]')\t        ~> $fromMillis('[Y0001]-[M01]-[D01]'),\t\t    \"dato_til\": ($tillaegsprocent_split[$i]\t        ~> $split(\"\\t\"))[2]\t        ~> $toMillis('[D01]-[M01]-[Y0001]')\t        ~> $fromMillis('[Y0001]-[M01]-[D01]'),\t\t    \"tillaegsprocent\": ($t := (($tillaegsprocent_split[$i]\t        ~> $split(\"\\t\"))[0]\t        ~> $replace(\"%\", \"\")\t        ~> $replace(\"Ingen resultater fundet\", \"0\"));\t          ($t = \"\" ? 0 : $number($t)))\t    }\t\t}\t)|",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 830,
  "y": 120,
  "wires": [
    [
      "4f97ac1f3bb2708a"
    ]
  ],
  "info": ""
}

Node.info = `
https://try.jsonata.org/4J8IPRU83
`

module.exports = Node;