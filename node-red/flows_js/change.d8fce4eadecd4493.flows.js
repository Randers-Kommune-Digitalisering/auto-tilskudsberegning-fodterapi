const Node = {
  "id": "d8fce4eadecd4493",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "name": "Format status",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t\"message\": message, \"type\": type, \"title\": title   \t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1240,
  "y": 140,
  "wires": [
    [
      "87437eca4cc7eec9"
    ]
  ],
  "_order": 945
}

module.exports = Node;