const Node = {
  "id": "c728e9afbea480e9",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "6c7a3f8252158db6",
  "name": "Sæt tilskud = pris",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "$.payload ~> |$.handlinger|(\t\t$uid := uid;\t$behandling := $$.payload.faktura.behandlinger[uid = $uid];\t$fid := $behandling.fid;\t$faktura := $$.payload.faktura[id = $fid];\t$borger := $$.payload[cpr = $faktura.patientCPR];\t\thandling = \"Opret sag\" ? {} : \t\t$behandling.type = \"B\" ?\t{\t    \"tilskud\": $behandling.patientAndel,\t    \"beregning\": ($behandling.patientAndel & \" kr\")\t}\t:\t{\t    \"tilskud\": $behandling.pris,\t    \"beregning\": ($behandling.pris & \" kr\")\t}\t\t)|",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1130,
  "y": 1740,
  "wires": [
    [
      "ebfc3d7f7b71a754"
    ]
  ],
  "info": "",
  "_order": 246
}

Node.info = `
https://try.jsonata.org/re36DEF4i
`

module.exports = Node;