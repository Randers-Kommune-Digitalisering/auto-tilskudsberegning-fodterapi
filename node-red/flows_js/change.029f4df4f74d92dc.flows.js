const Node = {
  "id": "029f4df4f74d92dc",
  "type": "change",
  "z": "6f0ff2a58c316519",
  "name": "Begræns tilskud der overstiger prisgrænse ved type A + uautoriseret type B",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "$.payload ~> |$.handlinger|(\t\t$uid := uid;\t$behandling := $$.payload.faktura.behandlinger[uid = $uid];\t$fid := $behandling.fid;\t$faktura := $$.payload.faktura[id = $fid];\t$borger := $$.payload[cpr = $faktura.patientCPR];\t$danmark := $borger.persondata.danmarkgruppe;\t\t$tilskud_max_hjemme := $$.tilskudsInfo.max_hjemmebehandling;\t$tilskud_max_ude := $$.tilskudsInfo.max_udekoersel;\t\thandling = \"Tilføj ydelse\" ?\t\t    $behandling.type = \"A\" \tor\t        ($behandling.type = \"B\"\t    and ($faktura.ydernummer != \"ydernummermangler\" and $faktura.ydernummer != null)) ?\t{\t\t    \"tilskud\": $value := ((titel = \"Behandlingipatientsegethjem\") ?\t                    (tilskud > $tilskud_max_hjemme ? $tilskud_max_hjemme : tilskud)\t                    :\t                    (tilskud > $tilskud_max_ude ? $tilskud_max_ude : tilskud)),\t    \t    \"beregning\": $append(beregning, [\t        {\t            \"beskrivelse\": \"Begræns tilskud der overstiger prisgrænse ved type A + uautoriseret type B\",\t            \"operation\": \"=\",\t            \"veardi\":  $value,\t            \"total\": $value\t        }\t    ])\t    \t}\t\t)|",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 730,
  "y": 320,
  "wires": [
    [
      "0ea4d8c3c830cf7a"
    ]
  ],
  "info": "",
  "_order": 380
}

Node.info = `
https://try.jsonata.org/re36DEF4i
`

module.exports = Node;