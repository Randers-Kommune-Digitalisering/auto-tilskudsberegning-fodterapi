const Node = {
  "id": "03dc22ca25b1f921",
  "type": "change",
  "z": "41d1b8798efe7e15",
  "name": "Auth",
  "rules": [
    {
      "t": "set",
      "p": "authkey",
      "pt": "msg",
      "to": "BROWSERLESS_AUTH",
      "tot": "env"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 910,
  "y": 340,
  "wires": [
    [
      "9e92c896a8cf98b0"
    ]
  ],
  "_order": 42
}

module.exports = Node;