const Node = {
  "id": "363e103b20db6c80",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "6c7a3f8252158db6",
  "name": "Begræns tilskud der overstiger prisgrænse ved type A + uautoriseret type B",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "$.payload ~> |$.handlinger|(\t\t$uid := uid;\t$behandling := $$.payload.faktura.behandlinger[uid = $uid];\t$fid := $behandling.fid;\t$faktura := $$.payload.faktura[id = $fid];\t$borger := $$.payload[cpr = $faktura.patientCPR];\t$danmark := $borger.persondata.danmarkgruppe;\t\t$tilskud_max_hjemme := $$.tilskudsInfo.max_hjemmebehandling;\t$tilskud_max_ude := $$.tilskudsInfo.max_udekoersel;\t\t    $behandling.type = \"A\" \tor\t        ($behandling.type = \"B\"\t    and ($faktura.ydernummer != \"ydernummermangler\" and $faktura.ydernummer != null)) ?\t{\t\t    \"tilskud\": (titel = \"Behandlingipatientsegethjem\") ?\t                    (tilskud > $tilskud_max_hjemme ? $tilskud_max_hjemme : tilskud)\t                    :\t                    (tilskud > $tilskud_max_ude ? $tilskud_max_ude : tilskud),\t    \"beregning\": beregning & \" = overstiger takst, derfor nedsat til \" & tilskud\t    \t}\t\t)|",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1310,
  "y": 1860,
  "wires": [
    [
      "5cfe1b69780c58ab"
    ]
  ],
  "info": "",
  "_order": 257
}

Node.info = `
https://try.jsonata.org/re36DEF4i
`

module.exports = Node;