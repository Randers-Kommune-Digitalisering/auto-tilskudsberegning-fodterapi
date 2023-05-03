const Node = {
  "id": "92fc21540237b9c7",
  "type": "switch",
  "z": "c28a486ea3e09387",
  "g": "31b5ea0c53a9c4fb",
  "name": "",
  "property": "payload.pageToAccept",
  "propertyType": "msg",
  "rules": [
    {
      "t": "eq",
      "v": "login",
      "vt": "str"
    },
    {
      "t": "eq",
      "v": "rules",
      "vt": "str"
    },
    {
      "t": "eq",
      "v": "grants",
      "vt": "str"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 3,
  "x": 670,
  "y": 580,
  "wires": [
    [
      "c6d6dc5b8ef2878b"
    ],
    [
      "801ba8048f457e32"
    ],
    [
      "118d9842141d09ca"
    ]
  ],
  "_order": 416
}

module.exports = Node;