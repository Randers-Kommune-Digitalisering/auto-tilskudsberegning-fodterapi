const Node = {
  "id": "05096968ae22cc6f",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "287b33b8879cbbbc",
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
      "p": "errors",
      "pt": "msg",
      "to": "$.errors ~> | $.faktura.behandlinger |\t({\t\t    \"type\": (titel = 'Behandlingipatientsegethjem' or\t             titel = 'Behandlingpåklinik' or\t             titel = \"Behandlingudentilskud\") ?\t                'A' : 'B'\t\t})|",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1130,
  "y": 2020,
  "wires": [
    [
      "046eb82cefda08d4"
    ]
  ],
  "info": "",
  "_order": 573
}

Node.info = `
https://try.jsonata.org/zbfWKbpM7
`

module.exports = Node;