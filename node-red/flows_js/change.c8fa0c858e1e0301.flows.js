const Node = {
  "id": "c8fa0c858e1e0301",
  "type": "change",
  "z": "5bb3204aef17c104",
  "g": "473e95a14e971e50",
  "name": "Set payload.data to { url, title, html }",
  "rules": [
    {
      "t": "set",
      "p": "payload.data",
      "pt": "msg",
      "to": "{\t    \"url\": payload.data.page,\t    \"title\": payload.pageTitle,\t    \"html\": payload.bodyHTML\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 780,
  "y": 640,
  "wires": [
    [
      "9a872468c9750fb4"
    ]
  ],
  "_order": 726
}

module.exports = Node;