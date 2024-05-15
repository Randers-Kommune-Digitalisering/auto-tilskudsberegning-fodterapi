const Node = {
  "id": "f67f076fcf682b26",
  "type": "change",
  "z": "f99fd88fa65c74b9",
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
  "x": 380,
  "y": 3300,
  "wires": [
    [
      "89455089e712562d"
    ]
  ],
  "info": ""
}

Node.info = `
https://try.jsonata.org/re36DEF4i
`

module.exports = Node;