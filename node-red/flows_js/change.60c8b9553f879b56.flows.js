const Node = {
  "id": "60c8b9553f879b56",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "db9b0160d9fdb906",
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
  "x": 320,
  "y": 3020,
  "wires": [
    [
      "68a3aa8007c437f8"
    ]
  ],
  "info": "",
  "_order": 879
}

Node.info = `
https://try.jsonata.org/re36DEF4i
`

module.exports = Node;