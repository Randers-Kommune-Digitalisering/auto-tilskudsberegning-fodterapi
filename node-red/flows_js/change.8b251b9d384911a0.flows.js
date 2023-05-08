const Node = {
  "id": "8b251b9d384911a0",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "6c7a3f8252158db6",
  "name": "Fratræk 50% (maks 100) ved type A + Danmark 1/2",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "$.payload ~> |$.handlinger|(\t\t$uid := uid;\t$behandling := $$.payload.faktura.behandlinger[uid = $uid];\t$fid := $behandling.fid;\t$faktura := $$.payload.faktura[id = $fid];\t$borger := $$.payload[cpr = $faktura.patientCPR];\t$danmark := $borger.persondata.danmarkgruppe;\t\t$tilskud_maxdkk := $$.tilskudsInfo.danmark_fratraek_maxdkk;\t$tilskud_procent := $$.tilskudsInfo.danmark_fratraek_procent;\t$danmarkProcent := tilskud * ($tilskud_procent / 100);\t$danmarkMax := $tilskud_maxdkk;\t\t$danmarkTilskud := $danmarkProcent > $danmarkMax ? $danmarkMax : $danmarkProcent;\t\t\t    $behandling.type = \"A\"\tand ($danmark = 1 or $danmark = 2) ?\t{\t\t    \"tilskud\": tilskud - ($danmarkProcent > $danmarkMax ? $danmarkMax : $danmarkProcent),\t    \"beregning\": beregning & \" -\" & ($danmarkProcent > $danmarkMax ? $danmarkMax : $danmarkProcent) & \" (Danmark)\"\t    \t}\t\t)|\t\t\t/*and ($faktura.ydernummer != \"ydernummermangler\" and $faktura.ydernummer != null) ?*/",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1230,
  "y": 1820,
  "wires": [
    [
      "363e103b20db6c80"
    ]
  ],
  "info": "",
  "_order": 245
}

Node.info = `
Hvis fodterapeut har ydernr (er statsautoriseret) og behandlingen er udført i Danmark, og borger er gruppe 1 og 2, fratrækkes et ydelsesbestemt tilskud på 50% fra Danmark (maks. 100 kr).
`

module.exports = Node;