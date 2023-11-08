const Node = {
  "id": "2fd098a8190ef089",
  "type": "change",
  "z": "41d1b8798efe7e15",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "pupid",
      "pt": "msg",
      "to": "pupCount",
      "tot": "flow"
    },
    {
      "t": "set",
      "p": "pupCount",
      "pt": "flow",
      "to": "msg.pupid+1",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "totalCount",
      "pt": "msg",
      "to": "totalActionCount",
      "tot": "flow",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1400,
  "y": 520,
  "wires": [
    [
      "5935cece6c345653",
      "972436459614bbd2"
    ]
  ],
  "_order": 169
}

module.exports = Node;