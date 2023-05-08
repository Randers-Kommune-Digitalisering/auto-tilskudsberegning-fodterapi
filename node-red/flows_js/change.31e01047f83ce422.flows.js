const Node = {
  "id": "31e01047f83ce422",
  "type": "change",
  "z": "a1b347492c77827f",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "url",
      "pt": "msg",
      "to": "http://browserless:3000/download",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "headers",
      "pt": "msg",
      "to": "{\t   \"accept\": \"application/json\"\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 640,
  "y": 1040,
  "wires": [
    [
      "730a3d78c101723f"
    ]
  ],
  "_order": 477
}

module.exports = Node;