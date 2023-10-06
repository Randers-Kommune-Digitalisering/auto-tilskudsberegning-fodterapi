const Node = {
  "id": "d8fce4eadecd4493",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "0b13e46f82eeff1c",
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
  "x": 720,
  "y": 80,
  "wires": [
    [
      "87437eca4cc7eec9"
    ]
  ],
  "_order": 644
}

module.exports = Node;