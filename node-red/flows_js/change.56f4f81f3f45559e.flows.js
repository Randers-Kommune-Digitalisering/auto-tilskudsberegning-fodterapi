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
      "to": "01/06/2023",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "presetEndDate",
      "pt": "msg",
      "to": "15/06/2023",
      "tot": "str",
      "dc": true
    },
    {
      "t": "set",
      "p": "maxDaysPerRun",
      "pt": "msg",
      "to": "1",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 505,
  "y": 320,
  "wires": [
    [
      "421ea3a3d1ce558a"
    ]
  ],
  "l": false,
  "info": "",
  "_order": 318
}

Node.info = `
## Custom deployment date
This change node defines the starting date for a run, if no runs are found in the run history.
It is used for testing, as well as for running the flow for the first time after deployment.
`

module.exports = Node;