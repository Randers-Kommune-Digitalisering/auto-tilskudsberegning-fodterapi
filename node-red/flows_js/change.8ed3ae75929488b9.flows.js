const Node = {
  "id": "8ed3ae75929488b9",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "2324a12126e9564c",
  "name": "Sæt værdier for start- og slutdato, \\n samt max antal dage per kørsel",
  "rules": [
    {
      "t": "set",
      "p": "presetStartDate",
      "pt": "msg",
      "to": "2024-02-01",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "presetEndDate",
      "pt": "msg",
      "to": "2024-12-31",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "maxDaysPerRun",
      "pt": "msg",
      "to": "1",
      "tot": "num"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 400,
  "y": 380,
  "wires": [
    [
      "4647b02996f9bcb3",
      "83ef073999308905"
    ]
  ]
}

module.exports = Node;