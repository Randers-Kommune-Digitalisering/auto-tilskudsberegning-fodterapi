const Node = {
  "id": "141037f73383a9f6",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "287b33b8879cbbbc",
  "name": "Tildel unikke behandlings-ID'er",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "$.payload ~> | $.faktura |\t({\t\t\"behandlinger\": behandlinger @$b #$i .{\t\t    \"uid\": (id ~> $substring(19,17))\t            & \"-\" & $b.ydelsesnummer\t            & \"-\" & ($i+1),\t\t    \"fid\": id,\t\t    \"titel\": $b.titel,\t    \"ydelsesnummer\": $b.ydelsesnummer,\t    \"ydernummer\": $b.ydernummer,\t    \"behandlingsKategory\": $b.behandlingsKategory,\t    \"pris\": $b.pris,\t    \"kørteKilometer\": $b.kørteKilometer,\t    \"patientAndel\": $b.patientAndel,\t    \"sygesikringsAndel\": $b.sygesikringsAndel\t\t}\t})|",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1150,
  "y": 1820,
  "wires": [
    [
      "7f450a3e484312bd"
    ]
  ],
  "info": "",
  "_order": 386
}

Node.info = `
https://try.jsonata.org/zbfWKbpM7
`

module.exports = Node;