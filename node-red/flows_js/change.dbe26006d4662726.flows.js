const Node = {
  "id": "dbe26006d4662726",
  "type": "change",
  "z": "6f0ff2a58c316519",
  "name": "Afrund til nærmeste 1 kr",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "$.payload ~> |$.handlinger|\t{\t    \"tilskud\": $round(tilskud, 0)\t}\t|",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 710,
  "y": 520,
  "wires": [
    []
  ],
  "_order": 386
}

module.exports = Node;