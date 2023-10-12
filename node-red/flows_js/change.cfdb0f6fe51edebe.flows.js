const Node = {
  "id": "cfdb0f6fe51edebe",
  "type": "change",
  "z": "5bb3204aef17c104",
  "name": "Set response object",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"requestType\": payload.requestType,\t    \"page\": payload.page,\t    \"statusCode\": payload.statusCode,\t    \"data\": payload.data,\t    \"redirect\": payload.redirect\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1960,
  "y": 1160,
  "wires": [
    [
      "952bb78592e2ca1e",
      "d529fc0a0d82838e"
    ]
  ],
  "_order": 1029
}

module.exports = Node;