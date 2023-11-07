const Node = {
  "id": "d8fce4eadecd4493",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "0ec27cd93fba954f",
  "name": "Format status",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"message\": message,\t    \"type\": type,\t    \"title\": title,\t    \"value\": value\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1930,
  "y": 160,
  "wires": [
    [
      "87437eca4cc7eec9",
      "5ba692fce5d7e41b"
    ]
  ],
  "_order": 554
}

module.exports = Node;