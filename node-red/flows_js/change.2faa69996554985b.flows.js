const Node = {
  "id": "2faa69996554985b",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "dcb33bd7556b5033",
  "name": "Auth",
  "rules": [
    {
      "t": "set",
      "p": "authkey",
      "pt": "msg",
      "to": "BROWSERLESS_AUTH",
      "tot": "env"
    },
    {
      "t": "set",
      "p": "headers",
      "pt": "msg",
      "to": "{\t    \"authorization\": \"Basic \" & authkey\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 190,
  "y": 920,
  "wires": [
    [
      "5509a842e605e90e"
    ]
  ],
  "_order": 646
}

module.exports = Node;