const Node = {
  "id": "2581c0834b49114e",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "d36913bfb8e8092b",
  "name": "Find bevilling + sag gældende for hver behandling",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "$.payload ~> | $.faktura.behandlinger |\t(\t\t    $uid := uid;\t    $fid := fid;\t    $faktura := $$.payload.faktura[id = $fid];\t    $borger := $$.payload[cpr = $faktura.patientCPR];\t    $type := type;\t\t{\t    \"test\": $type,\t    \"bevilget\": type = 'A' ?\t                    ($borger.persondata.bevilling ?\t                        true : $borger.persondata.sager\t                                [   \t                                    titel ~> $lowercase ~> $contains(\"fod\")\t                                and\t                                    (type ~> $lowercase ~> $contains(\"udvidet helbredstill\"))\t                                and\t                                    ($faktura.dato ~> $toMillis) > (fra ~> $toMillis)\t                                and\t                                    (til ? ($faktura.dato ~> $toMillis) < (til ~> $toMillis) : true)\t                                and\t                                    bevilling = true\t                                ]\t                                    ~> $exists ? true : false)\t                :\t                    ($borger.persondata.sager\t                        [\t                            (type ~> $lowercase ~> $contains(\"almindeligt helbred\")\t                        or\t                            type ~> $lowercase ~> $contains(\"gskort\"))\t                        and\t                            ($faktura.dato ~> $toMillis) > (fra ~> $toMillis)\t                        and\t                            (til ? ($faktura.dato ~> $toMillis) < (til ~> $toMillis) : true)\t                        and\t                            bevilling = true\t                        ]\t                            ~> $exists ? true : false),\t                                \t    \"sag\": $borger.persondata.sager\t                [\t                (\t                    $type = 'A' ?\t                    (\t                        titel ~> $lowercase ~> $contains(\"fod\")\t                    and\t                        type ~> $lowercase ~> $contains(\"udvidet helbred\")\t                    )\t                    :\t                    (\t                        type ~> $lowercase ~> $contains(\"almindeligt helbredstill\")\t                    or\t                        type ~> $lowercase ~> $contains(\"gskort\")\t                    )\t                )\t                and\t                    ($faktura.dato ~> $toMillis) > (fra ~> $toMillis)\t                and\t                    (til ? ($faktura.dato ~> $toMillis) < (til ~> $toMillis) : true)\t                and\t                    bevilling = true\t                ]\t\t})|\t\t\t/* Gammel version som antager at alle gyldige sager skal have \"fod\" i titlen uanset type\t\t$.payload ~> | $.faktura.behandlinger |\t(\t\t    $uid := uid;\t    $fid := fid;\t    $faktura := $$.payload.faktura[id = $fid];\t    $borger := $$.payload[cpr = $faktura.patientCPR];\t    $type := type;\t\t{\t    \"bevilget\": type = 'A' ?\t                    ($borger.persondata.bevilling ?\t                        true : $borger.persondata.sager\t                                [   \t                                    titel ~> $lowercase ~> $contains(\"fod\")\t                                and\t                                    (type ~> $lowercase ~> $contains(\"udvidet helbredstill\"))\t                                and\t                                    ($faktura.dato ~> $toMillis) > (fra ~> $toMillis)\t                                and\t                                    (til ? ($faktura.dato ~> $toMillis) < (til ~> $toMillis) : true)\t                                and\t                                    bevilling = true\t                                ]\t                                    ~> $exists ? true : false)\t                :\t                    ($borger.persondata.sager\t                        [\t                            (type ~> $lowercase ~> $contains(\"almindeligt helbred\")\t                        or\t                            type ~> $lowercase ~> $contains(\"gskort\"))\t                        and\t                            ($faktura.dato ~> $toMillis) > (fra ~> $toMillis)\t                        and\t                            (til ? ($faktura.dato ~> $toMillis) < (til ~> $toMillis) : true)\t                        and\t                            bevilling = true\t                        ]\t                            ~> $exists ? true : false),\t                                \t    \"sag\": $borger.persondata.sager\t                [\t                    titel ~> $lowercase ~> $contains(\"fod\")\t                and\t                    ($type = 'A' ?\t                        (type ~> $lowercase ~> $contains(\"udvidet helbred\"))\t                    :\t                        (type ~> $lowercase ~> $contains(\"almindeligt helbredstill\")\t                    or\t                        type ~> $lowercase ~> $contains(\"gskort\")))\t                and\t                    ($faktura.dato ~> $toMillis) > (fra ~> $toMillis)\t                and\t                    (til ? ($faktura.dato ~> $toMillis) < (til ~> $toMillis) : true)\t                and\t                    bevilling = true\t                ]\t\t})|\t*/",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 830,
  "y": 2780,
  "wires": [
    [
      "ecf55b9fc7a69637"
    ]
  ]
}

module.exports = Node;