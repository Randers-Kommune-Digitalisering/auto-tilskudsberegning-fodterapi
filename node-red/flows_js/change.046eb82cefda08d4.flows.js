const Node = {
  "id": "046eb82cefda08d4",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "287b33b8879cbbbc",
  "name": "Find bevilling + sag gældende for hver behandling",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "$.payload ~> | $.faktura.behandlinger |\t(\t\t    $uid := uid;\t    $fid := fid;\t    $faktura := $$.payload.faktura[id = $fid];\t    $borger := $$.payload[cpr = $faktura.patientCPR];\t    $type := type;\t\t{\t    \"bevilget\": type = 'A' ?\t                    ($borger.persondata.bevilling ?\t                        true : $borger.persondata.sager\t                                [   \t                                    titel ~> $lowercase ~> $contains(\"fod\")\t                                and\t                                    (type ~> $lowercase ~> $contains(\"udvidet helbredstill\"))\t                                and\t                                    ($faktura.dato ~> $toMillis) > (fra ~> $toMillis)\t                                and\t                                    (til ? ($faktura.dato ~> $toMillis) < (til ~> $toMillis) : true)\t                                and\t                                    bevilling = true\t                                ]\t                                    ~> $exists ? true : false)\t                :\t                    ($borger.persondata.sager\t                        [\t                            (type ~> $lowercase ~> $contains(\"almindeligt helbred\")\t                        or\t                            type ~> $lowercase ~> $contains(\"gskort\"))\t                        and\t                            ($faktura.dato ~> $toMillis) > (fra ~> $toMillis)\t                        and\t                            (til ? ($faktura.dato ~> $toMillis) < (til ~> $toMillis) : true)\t                        and\t                            bevilling = true\t                        ]\t                            ~> $exists ? true : false),\t                                \t    \"sag\": $borger.persondata.sager\t                [\t                    titel ~> $lowercase ~> $contains(\"fod\")\t                and\t                    ($type = 'A' ?\t                        (type ~> $lowercase ~> $contains(\"udvidet helbred\"))\t                    :\t                        (type ~> $lowercase ~> $contains(\"almindeligt helbredstill\")\t                    or\t                        type ~> $lowercase ~> $contains(\"gskort\")))\t                and\t                    ($faktura.dato ~> $toMillis) > (fra ~> $toMillis)\t                and\t                    (til ? ($faktura.dato ~> $toMillis) < (til ~> $toMillis) : true)\t                and\t                    bevilling = true\t                ]\t\t})|",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1250,
  "y": 1580,
  "wires": [
    [
      "dc943787affd67f4",
      "e1e1f0e8189c47e5",
      "c4cfcf10fce7bd98"
    ]
  ],
  "_order": 306
}

module.exports = Node;