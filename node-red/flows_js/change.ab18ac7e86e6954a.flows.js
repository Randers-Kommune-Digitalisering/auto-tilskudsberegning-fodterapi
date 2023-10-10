const Node = {
  "id": "ab18ac7e86e6954a",
  "type": "change",
  "z": "43652557380ac3f3",
  "name": "Person- og \\n fakturadata",
  "rules": [
    {
      "t": "set",
      "p": "webElements.receipt",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "webElements.receipt.grant",
      "pt": "msg",
      "to": "payload.persondata.bevilling ? true",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "webElements.receipt.cases",
      "pt": "msg",
      "to": "payload.persondata.sager @ $sag .\t(\t    $sag.titel ~> $lowercase() ~> $contains(\"fod\") or\t    $sag.type ~> $lowercase() ~> $contains(\"helbred\") ?\t    \t{\t    \"title\": $sag.titel ~> $substringBefore(\"(\") ~> $trim(),\t    \"type\": $sag.type,\t    \"border\": $sag.aktiv ?\t                $sag.type ~> $lowercase() ~> $contains(\"almindeligt helbredstillæg\") or\t                $sag.type ~> $lowercase() ~> $contains(\"helbredstillægskort\") ?\t                    \"info\"\t                    :\t                    \"success\"\t                :\t                \"warning\",\t    \"gyldighed\": $sag.aktiv ?\t                    $sag.til ~> $exists() ?\t                        \"Gyldig indtil \" & ( $sag.til ~> $toMillis() ~> $fromMillis(\"[D01]/[M01]-[Y0001]\") )\t                        :\t                        \"Gyldig, ukendt uløbsdato\"\t                        \t                    : \"Gyldighed udløb \" & ( $sag.til ~> $toMillis() ~> $fromMillis(\"[D01]/[M01]-[Y0001]\") )\t}\t)",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "payload.receipt.assets",
      "pt": "msg",
      "to": "payload.persondata.formue ~> $exists() ?\t    payload.persondata.formue ~> $type() = \"number\" ?\t        (( payload.persondata.formue ~> $formatNumber('#,###')) ~> $replace(\",\", \".\")) & \" kr\"\t        :\t        \"Tjek KP\"\t    :\t    \"Ikke oplyst\"",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "payload.receipt.denmark",
      "pt": "msg",
      "to": "payload.persondata.danmarkgruppe ~> $exists() ?\t\t    payload.persondata.danmarkgruppe = 0 ?\t        \"Ej medlem\"\t        :\t        \"Gruppe \" & payload.persondata.danmarkgruppe\t    :\t    \"Ikke oplyst\"",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "payload.receipt.insurancePercentage",
      "pt": "msg",
      "to": "payload.faktura._helbredstillaegsprocent ~> $exists() ?\t\t    payload.faktura._helbredstillaegsprocent ~> $type() = \"array\" ?\t\t        payload.faktura._helbredstillaegsprocent[0].tillaegsprocent\t        :\t        payload.faktura._helbredstillaegsprocent.tillaegsprocent\t        \t    :\t    0",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 790,
  "y": 2040,
  "wires": [
    [
      "34a22fef0a170d75",
      "c316a7acfbd673fa"
    ]
  ],
  "_order": 412
}

module.exports = Node;