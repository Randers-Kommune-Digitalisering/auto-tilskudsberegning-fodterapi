const Node = {
  "id": "b90ad46fd01174cb",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "922e8d584a739969",
  "name": "Send status",
  "rules": [
    {
      "t": "set",
      "p": "message",
      "pt": "msg",
      "to": "\"Fejl ved hentning af fakturaer. Prøver igen ... (\" & workletRetryCount & \"/3)\"",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "type",
      "pt": "msg",
      "to": "update",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1310,
  "y": 980,
  "wires": [
    [
      "cc958c070ddca8ac"
    ]
  ],
  "_order": 422
}

module.exports = Node;