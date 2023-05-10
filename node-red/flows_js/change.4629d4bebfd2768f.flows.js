const Node = {
  "id": "4629d4bebfd2768f",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "287b33b8879cbbbc",
  "name": "Sammensæt lister",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "/* Laver array med objekt for hver borger, og tilknytter fakturaer */\t\t$keys(citizens) @$k.\t{\t    \"cpr\": $k,\t    \"persondata\": $lookup(citizens, $k),\t    \"faktura\": receipts[$.patientCPR = $k]\t}\t",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 430,
  "y": 1440,
  "wires": [
    [
      "00a9a4712b97560f"
    ]
  ],
  "info": "",
  "_order": 282
}

Node.info = `
https://try.jsonata.org/wRgtKDrKD
`

module.exports = Node;