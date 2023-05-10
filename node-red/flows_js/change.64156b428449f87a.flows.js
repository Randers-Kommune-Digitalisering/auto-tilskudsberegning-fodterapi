const Node = {
  "id": "64156b428449f87a",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "7de50fe1369c94a7",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "tilskudsInfo",
      "pt": "msg",
      "to": "payload.grants",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 415,
  "y": 180,
  "wires": [
    [
      "56f4f81f3f45559e"
    ]
  ],
  "l": false,
  "info": "",
  "_order": 222
}

Node.info = `
## Copy grant info
This change node copies the grant set from the payload into the msg object as msg.tilskudsInfo.
`

module.exports = Node;