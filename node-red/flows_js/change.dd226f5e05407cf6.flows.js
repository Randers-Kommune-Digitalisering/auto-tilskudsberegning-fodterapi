const Node = {
  "id": "dd226f5e05407cf6",
  "type": "change",
  "z": "6f0ff2a58c316519",
  "name": "Sæt tilskud = pris",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "$.payload ~> |$.handlinger|(\t\t$uid := uid;\t$behandling := $$.payload.faktura.behandlinger[uid = $uid];\t$fid := $behandling.fid;\t$faktura := $$.payload.faktura[id = $fid];\t$borger := $$.payload[cpr = $faktura.patientCPR];\t\thandling = \"Opret sag\" ? {} : \t\t$behandling.type = \"B\" ?\t{\t    \"tilskud\": $value := $behandling.patientAndel,\t    \"beregning\": [\t        {\t            \"beskrivelse\": \"Sæt startværdi til behandlingens pris\",\t            \"operation\": \"=\",\t            \"veardi\": $value,\t            \"total\": $value\t        }\t    ]\t}\t:\t{\t    \"tilskud\": $value := $behandling.pris,\t    \"beregning\": [\t        {\t            \"beskrivelse\": \"Sæt startværdi til behandlingens pris\",\t            \"operation\": \"=\",\t            \"veardi\": $value,\t            \"total\": $value\t        }\t    ]\t}\t\t)|",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 490,
  "y": 220,
  "wires": [
    [
      "db02f6eff234296c"
    ]
  ],
  "info": ""
}

Node.info = `
https://try.jsonata.org/re36DEF4i
`

module.exports = Node;