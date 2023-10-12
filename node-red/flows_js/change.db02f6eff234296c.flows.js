const Node = {
  "id": "db02f6eff234296c",
  "type": "change",
  "z": "6f0ff2a58c316519",
  "name": "Fratræk ydelsesbestemt tillæg fra Danmark (type B + Danmark 1/2)",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "$.payload ~> |$.handlinger|(\t\t$uid := uid;\t$behandling := $$.payload.faktura.behandlinger[uid = $uid];\t$fid := $behandling.fid;\t$faktura := $$.payload.faktura[id = $fid];\t$borger := $$.payload[cpr = $faktura.patientCPR];\t$danmark := $borger.persondata.danmarkgruppe;\t\t$danmarkSats := $$.tilskudsInfo.tilskudsperioder.satser[wtitel = $behandling.titel];\t$danmarkProcent := tilskud * ($danmarkSats.tilskud_procent / 100);\t$danmarkMax := $danmarkSats.tilskud_maxdkk;\t\t$danmarkTilskud := $danmarkProcent > $danmarkMax ? $danmarkMax : $danmarkProcent;\t\thandling = \"Tilføj ydelse\" ?\t\t    $behandling.type = \"B\"\tand ($danmark = 1 or $danmark = 2) ?\t{\t    \t    \"tilskud\": $value := (tilskud - ($danmarkProcent > $danmarkMax ? $danmarkMax : $danmarkProcent)),\t    \"beregning\": $append(beregning, [\t        {\t            \"beskrivelse\": \"Fratræk ydelsesbestemt tillæg fra Danmark (type B + Danmark 1/2)\",\t            \"operation\": \"-\",\t            \"veardi\": ($danmarkProcent > $danmarkMax ? $danmarkMax : $danmarkProcent),\t            \"total\": $value\t        }\t    ])\t    \t}\t\t)|",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 640,
  "y": 200,
  "wires": [
    [
      "5de7c412a8066a20"
    ]
  ],
  "info": "",
  "_order": 506
}

Node.info = `
https://try.jsonata.org/re36DEF4i
`

module.exports = Node;