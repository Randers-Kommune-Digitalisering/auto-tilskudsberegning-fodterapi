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
      "to": "$.payload ~> |$.handlinger|(\t\t$uid := uid;\t$behandling := $$.payload.faktura.behandlinger[uid = $uid];\t$fid := $behandling.fid;\t$faktura := $$.payload.faktura[id = $fid];\t$borger := $$.payload[cpr = $faktura.patientCPR];\t\t{\t    \"tilskud\": tilskud * ($faktura._helbredstillaegsprocent.tillaegsprocent / 100),\t    \"beregning\": beregning & \" * \" & ($faktura._helbredstillaegsprocent.tillaegsprocent / 100) & \" = \" & tilskud & \" kr\"\t}\t\t)|",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1150,
  "y": 1900,
  "wires": [
    [
      "ac2d9ca641a094e8",
      "04b177707c5e0edc"
    ]
  ],
  "info": "",
  "_order": 255
}

Node.info = `
https://try.jsonata.org/re36DEF4i
`

module.exports = Node;