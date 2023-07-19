const Node = {
  "id": "0ea4d8c3c830cf7a",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "db9b0160d9fdb906",
  "name": "Gang med tillægsprocent",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "$.payload ~> |$.handlinger|(\t\t$uid := uid;\t$behandling := $$.payload.faktura.behandlinger[uid = $uid];\t$fid := $behandling.fid;\t$faktura := $$.payload.faktura[id = $fid];\t$borger := $$.payload[cpr = $faktura.patientCPR];\t\t{\t    \"tilskud\": $value := (tilskud * ($faktura._helbredstillaegsprocent.tillaegsprocent / 100)),\t    \t    \"beregning\": $append(beregning, [\t        {\t            \"beskrivelse\": \"Gang med tillægsprocent\",\t            \"operation\": \"*\",\t            \"veardi\": ($faktura._helbredstillaegsprocent.tillaegsprocent / 100),\t            \"total\": $value\t        }\t    ])\t}\t\t)|",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 930,
  "y": 3180,
  "wires": [
    [
      "31519626c80614f6"
    ]
  ],
  "info": "",
  "_order": 889
}

Node.info = `
https://try.jsonata.org/re36DEF4i
`

module.exports = Node;