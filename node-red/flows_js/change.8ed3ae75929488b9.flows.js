const Node = {
  "id": "8ed3ae75929488b9",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "name": "Sæt værdier for start- og slutdato, \\n samt max antal dage per kørsel",
  "rules": [
    {
      "t": "set",
      "p": "presetStartDate",
      "pt": "flow",
      "to": "2023-07-01",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "presetEndDate",
      "pt": "flow",
      "to": "2023-12-31",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "maxDaysPerRun",
      "pt": "flow",
      "to": "2",
      "tot": "num"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 300,
  "y": 200,
  "wires": [
    [
      "4aa6361c40990e55"
    ]
  ],
  "_order": 666
}

module.exports = Node;