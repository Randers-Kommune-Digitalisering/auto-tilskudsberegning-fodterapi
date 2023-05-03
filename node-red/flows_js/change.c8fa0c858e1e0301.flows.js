const Node = {
  "id": "c8fa0c858e1e0301",
  "type": "change",
  "z": "5bb3204aef17c104",
  "g": "473e95a14e971e50",
  "name": "Set response",
  "rules": [
    {
      "t": "set",
      "p": "payload.page",
      "pt": "msg",
      "to": "{ \"url\": payload.page }",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "payload.page.html",
      "pt": "msg",
      "to": "payload.bodyHTML",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "payload.page.title",
      "pt": "msg",
      "to": "payload.pageTitle",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1590,
  "y": 360,
  "wires": [
    [
      "e5908679bccd13f4"
    ]
  ],
  "_order": 414
}

module.exports = Node;