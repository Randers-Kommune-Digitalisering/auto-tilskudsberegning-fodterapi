const Node = {
  "id": "15a4a332983b2862",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "name": "Forespørgsel \\n variabler",
  "rules": [
    {
      "t": "set",
      "p": "tablename",
      "pt": "msg",
      "to": "runHistory",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "runId",
      "pt": "msg",
      "to": "currentRun.uid",
      "tot": "flow"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 410,
  "y": 4140,
  "wires": [
    [
      "eef22b37cc07fa10"
    ]
  ],
  "_order": 932
}

module.exports = Node;