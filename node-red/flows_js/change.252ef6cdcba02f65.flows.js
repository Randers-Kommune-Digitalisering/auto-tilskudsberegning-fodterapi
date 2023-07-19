const Node = {
  "id": "252ef6cdcba02f65",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "6c7a3f8252158db6",
  "name": "Tilføj sager + ydelser til handlinger",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "$.payload ~> |$|(\t\t$faktura := faktura;\t\t{\t    \"handlinger\": faktura.behandlinger @$b .(\t        $b := $b;\t\t        $b.sag ~> $boolean ?\t        {\t            \"handling\": \"Tilføj ydelse\",\t            \"type\": $b.type,\t            \"uid\": $b.uid,\t            \"fid\": $b.fid,\t            \"dato\": $faktura.dato\t        }\t        : $b.bevilget ?\t        [{\t            \"handling\": \"Opret sag\",\t            \"type\": $b.type,\t            \"uid\": $b.uid,\t            \"fid\": $b.fid\t        },\t        {\t            \"handling\": \"Tilføj ydelse\",\t            \"type\": $b.type,\t            \"fid\": $b.fid,\t            \"uid\": $b.uid,\t            \"dato\": $faktura.dato\t        }]\t        \t    )\t}\t\t)|",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 440,
  "y": 2300,
  "wires": [
    [
      "eea859cc92e89e3f"
    ]
  ],
  "info": "",
  "_order": 488
}

Node.info = `
https://try.jsonata.org/re36DEF4i
`

module.exports = Node;