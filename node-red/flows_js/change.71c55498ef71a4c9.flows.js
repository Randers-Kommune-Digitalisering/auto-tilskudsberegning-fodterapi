const Node = {
  "id": "71c55498ef71a4c9",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "287b33b8879cbbbc",
  "name": "Fjern unødvendig data",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "$.payload ~> |$.faktura|\t{},\t[\t    \"behandlerNavn\",\t    \"klinikNavn\",\t    \"klinikCVR\",\t    \"behandlerType\",\t    \"patientTelefon\"\t]\t|",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1160,
  "y": 1300,
  "wires": [
    [
      "6afaf8f1c596de67"
    ]
  ],
  "_order": 307
}

module.exports = Node;