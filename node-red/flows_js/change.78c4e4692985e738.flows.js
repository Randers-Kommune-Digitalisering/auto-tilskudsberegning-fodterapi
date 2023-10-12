const Node = {
  "id": "78c4e4692985e738",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "287b33b8879cbbbc",
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
  "x": 410,
  "y": 1940,
  "wires": [
    [
      "2cf375bbbada29f9"
    ]
  ],
  "info": "",
  "_order": 620
}

Node.info = `
https://try.jsonata.org/4J8IPRU83
`

module.exports = Node;