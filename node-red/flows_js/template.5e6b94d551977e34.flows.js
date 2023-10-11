const Node = {
  "id": "5e6b94d551977e34",
  "type": "template",
  "z": "f99fd88fa65c74b9",
  "name": "",
  "field": "payload",
  "fieldType": "msg",
  "format": "json",
  "syntax": "mustache",
  "template": "",
  "output": "json",
  "x": 480,
  "y": 4980,
  "wires": [
    [
      "2283c8380be5125f"
    ]
  ],
  "_order": 915
}

Node.template = `
[
    {
        "displayname": "WorkLet",
        "name": "status_worklet",
        "type": "gauge",
        "phase": "extract",
        "datasource": "https://workletnew.snapp.dk/",
        "comment": "This metric mesures web availability status on ",
        "value": 1,
        "message": "WorkLet is available"
    },
    {
        "displayname": "Kommunernes Pensionssystem",
        "name": "status_kp",
        "type": "gauge",
        "phase": "extract",
        "datasource": "https://fagsystem.kommunernespensionssystem.dk/spk-fagsystem/",
        "comment": "This metric mesures web availability status on KP",
        "value": 1,
        "message": "KP is available"
    }
]
`

module.exports = Node;