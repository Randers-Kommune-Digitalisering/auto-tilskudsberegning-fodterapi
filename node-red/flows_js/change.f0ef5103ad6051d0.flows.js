const Node = {
  "id": "f0ef5103ad6051d0",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "d36913bfb8e8092b",
  "name": "Bestem behandlingstype",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "$.payload ~> | $.faktura.behandlinger |\t({\t\t    \"type\": (titel = 'Behandlingipatientsegethjem' or\t             titel = 'Behandlingpåklinik' or\t             titel = \"Behandlingudentilskud\") ?\t                'A' : 'B'\t\t})|",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "errorList",
      "pt": "msg",
      "to": "$.errorList ~> | $.faktura.behandlinger |\t({\t\t    \"type\": (titel = 'Behandlingipatientsegethjem' or\t             titel = 'Behandlingpåklinik' or\t             titel = \"Behandlingudentilskud\") ?\t                'A' : 'B'\t\t})|",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 750,
  "y": 2740,
  "wires": [
    [
      "2581c0834b49114e"
    ]
  ],
  "info": "",
  "_order": 519
}

Node.info = `
https://try.jsonata.org/zbfWKbpM7
`

module.exports = Node;