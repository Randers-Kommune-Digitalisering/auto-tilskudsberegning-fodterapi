const Node = {
  "id": "56f4f81f3f45559e",
  "type": "change",
  "z": "8ea344595d9a442a",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "presetStartDate",
      "pt": "msg",
      "to": "10/05/2023",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "presetEndDate",
      "pt": "msg",
      "to": "presetStartDate",
      "tot": "msg",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 545,
  "y": 320,
  "wires": [
    [
      "421ea3a3d1ce558a"
    ]
  ],
  "l": false,
  "info": "",
  "_order": 278
}

Node.info = `
## Custom deployment date
This change node defines the starting date for a run, if no runs are found in the run history.
It is used for testing, as well as for running the flow for the first time after deployment.
`

module.exports = Node;