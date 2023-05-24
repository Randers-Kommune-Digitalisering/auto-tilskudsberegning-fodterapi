const Node = {
  "id": "5cfe1b69780c58ab",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "6c7a3f8252158db6",
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
  "x": 1090,
  "y": 2460,
  "wires": [
    [
      "05736816d263afd3"
    ]
  ],
  "info": "",
  "_order": 268
}

Node.info = `
https://try.jsonata.org/re36DEF4i
`

module.exports = Node;