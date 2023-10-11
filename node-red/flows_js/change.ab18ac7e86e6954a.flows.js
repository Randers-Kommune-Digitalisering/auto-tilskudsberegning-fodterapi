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
      "p": "webElements.receipt.title",
      "pt": "msg",
      "to": "payload.recommended ?\t    \"Fakturaer - anbefalede handlinger\" : \"Fakturaer - manuel behandling\"",
      "tot": "jsonata"
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
      "to": "payload.persondata.sager @ $sag .\t(\t    $sag.titel ~> $lowercase() ~> $contains(\"fod\") or\t    $sag.type ~> $lowercase() ~> $contains(\"helbred\") ?\t    \t{\t    \"title\": $sag.titel ~> $substringBefore(\"(\") ~> $trim(),\t    \"type\": $sag.type,\t    \"border\": $sag.aktiv ?\t                $sag.type ~> $lowercase() ~> $contains(\"almindeligt helbredstillæg\") or\t                $sag.type ~> $lowercase() ~> $contains(\"helbredstillægskort\") ?\t                    \"info\"\t                    :\t                    \"success\"\t                :\t                \"warning\",\t    \"gyldighed\": $sag.aktiv ?\t                    $sag.til ~> $exists() ?\t                        \"Gyldig indtil \" & ( $sag.til ~> $toMillis() ~> $fromMillis(\"[D01]/[M01]-[Y0001]\") )\t                        :\t                        \"Gyldig, ukendt uløbsdato\"\t                        \t                    : \"Gyldighed udløb \" & ( $sag.til ~> $toMillis() ~> $fromMillis(\"[D01]/[M01]-[Y0001]\") ),\t    \"fra\": $sag.fra,\t    \"til\": $sag.til\t}\t)",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "webElements.receipt.assets",
      "pt": "msg",
      "to": "payload.persondata.formue ~> $exists() ?\t    payload.persondata.formue ~> $type() = \"number\" ?\t        (( payload.persondata.formue ~> $formatNumber('#,###')) ~> $replace(\",\", \".\")) & \" kr\"\t        :\t        \"Tjek KP\"\t    :\t    \"Ikke oplyst\"",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "webElements.receipt.denmark",
      "pt": "msg",
      "to": "payload.persondata.danmarkgruppe ~> $exists() ?\t\t    payload.persondata.danmarkgruppe = 0 ?\t        \"Ej medlem\"\t        :\t        \"Gruppe \" & payload.persondata.danmarkgruppe\t    :\t    \"Ikke oplyst\"",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "webElements.receipt.insurancePercentage",
      "pt": "msg",
      "to": "payload.faktura._helbredstillaegsprocent ~> $exists() ?\t\t    payload.faktura._helbredstillaegsprocent ~> $type() = \"array\" ?\t\t        payload.faktura._helbredstillaegsprocent[0].tillaegsprocent\t        :\t        payload.faktura._helbredstillaegsprocent.tillaegsprocent\t        \t    :\t    0",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "webElements.receipt.receipts",
      "pt": "msg",
      "to": "payload @ $citizen .\t    $citizen.faktura @ $receipt # $index .\t    {\t        \"id\": $receipt.id,\t        \"nr\": $index+1,\t        \"dato\": $receipt.dato ~> $toMillis() ~> $fromMillis(\"[D01]/[M01]-[Y0001]\"),\t        \"ydernummer\": $receipt.ydernummer != \"ydernummermangler\" ? $receipt.ydernummer,\t        \"behandlinger\": $receipt.behandlinger @ $behandling .\t        {\t            \"ydelsesnummer\": $behandling.ydelsesnummer,\t            \"titel\": $behandling.titel,\t            \"type\": $behandling.type,\t            \"patientAndel\": $behandling.patientAndel,\t            \"sygesikringsAndel\": $behandling.sygesikringsAndel,\t            \"total\": $behandling.pris\t        },\t        \"handlinger\": ($citizen.handlinger[fid = $receipt.id]) @ $handling # $hindex .\t        {\t            \"nr\": $hindex+1,\t            \"handling\": $handling.handling = \"Tilføj ydelse\" ?\t                            $handling.handling & \" - Tilskud gives: \" & $handling.tilskud & \" kr\"\t                        :\t                        $handling.handling = \"Opret sag\" ?\t                            $handling.handling & \" - \" &  ( $handling.type = \"A\" ? \"Udvidet helbredstillæg\" : \"Almindeligt helbredstillæg\" ) & \" (type \" & $handling.type & \")\",\t\t            \"tilskud\": $handling.tilskud\t        },\t        \"total\": $receipt.total\t    }\t",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 790,
  "y": 1860,
  "wires": [
    [
      "34a22fef0a170d75",
      "c316a7acfbd673fa"
    ]
  ],
  "_order": 405
}

module.exports = Node;