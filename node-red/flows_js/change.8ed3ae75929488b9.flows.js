const Node = {
  "id": "8ed3ae75929488b9",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "name": "Sæt værdier for \\n startdato og slutdato",
  "rules": [
    {
      "t": "set",
      "p": "presetStartDate",
      "pt": "flow",
      "to": "01/08/2023",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "presetEndDate",
      "pt": "msg",
      "to": "31/12/2023",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 260,
  "y": 200,
  "wires": [
    [
      "4aa6361c40990e55"
    ]
  ],
  "_order": 665
}

module.exports = Node;