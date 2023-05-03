const Node = {
  "id": "62bdefaa23262980",
  "type": "change",
  "z": "c28a486ea3e09387",
  "g": "dff24743df339ae5",
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
      "e7b83f0e755d4fdf"
    ]
  ],
  "_order": 414
}

module.exports = Node;