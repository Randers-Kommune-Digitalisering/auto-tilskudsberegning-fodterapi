const Node = {
  "id": "327bde8aa428565e",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "f0775df5510c6dd0",
  "name": "Sammensæt lister \\n \"citizens\" & \"receipts\"",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "/* Laver array med objekt for hver borger, og tilknytter fakturaer */\t\t$keys(citizens) @$k.\t{\t    \"cpr\": $k,\t    \"persondata\": $lookup(citizens, $k),\t    \"faktura\": receipts[$.patientCPR = $k]\t}\t",
      "tot": "jsonata"
    },
    {
      "t": "delete",
      "p": "citizens",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "receipts",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 240,
  "y": 2060,
  "wires": [
    [
      "93b93458806ecf6a",
      "1c35c1712a1009bb"
    ]
  ],
  "info": ""
}

Node.info = `
https://try.jsonata.org/wRgtKDrKD
`

module.exports = Node;