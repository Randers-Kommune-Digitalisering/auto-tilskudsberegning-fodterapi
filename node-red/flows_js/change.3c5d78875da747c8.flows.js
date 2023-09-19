const Node = {
  "id": "3c5d78875da747c8",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "f0775df5510c6dd0",
  "name": "Tildel unikke behandlings-ID'er \\n + Fjern unødvendig fakturadata",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "$.payload ~> | $.faktura |\t({\t\t\"behandlinger\": behandlinger @$b #$i .{\t\t    \"uid\": (id ~> $substring(19,17))\t            & \"-\" & $b.ydelsesnummer\t            & \"-\" & ($i+1),\t\t    \"fid\": id,\t\t    \"titel\": $b.titel,\t    \"ydelsesnummer\": $b.ydelsesnummer,\t    \"ydernummer\": $b.ydernummer,\t    \"behandlingsKategory\": $b.behandlingsKategory,\t    \"pris\": $b.pris,\t    \"kørteKilometer\": $b.kørteKilometer,\t    \"patientAndel\": $b.patientAndel,\t    \"sygesikringsAndel\": $b.sygesikringsAndel\t\t}\t})|",
      "tot": "jsonata"
    },
    {
      "t": "delete",
      "p": "payload.patientTelefon",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 930,
  "y": 1960,
  "wires": [
    [
      "d8a4ee7e312de513"
    ]
  ],
  "info": "",
  "_order": 926
}

Node.info = `
https://try.jsonata.org/zbfWKbpM7
`

module.exports = Node;