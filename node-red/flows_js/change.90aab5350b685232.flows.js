const Node = {
  "id": "90aab5350b685232",
  "type": "change",
  "z": "25b4c5bead5231de",
  "name": "Generated test data",
  "rules": [
    {
      "t": "set",
      "p": "metrics.values.name",
      "pt": "flow",
      "to": "etl_extract_status",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "metrics.values.type",
      "pt": "flow",
      "to": "gauge",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "metrics.values.phase",
      "pt": "flow",
      "to": "extract",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "metrics.values.datasource",
      "pt": "flow",
      "to": "sftp.testserver02.dk",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "metrics.values.comment",
      "pt": "flow",
      "to": "\"This metric mesures file extraction status on \" & $flowContext(\"metrics.values.datasource\")",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "metrics.values.value",
      "pt": "flow",
      "to": "$random()>0.8?1:0",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "metrics.values.message",
      "pt": "flow",
      "to": "$number($flowContext(\"metrics.values.value\"))>0.8?\"Last file transfer succesfull\":\"Last file transfer failed\"",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 380,
  "y": 160,
  "wires": [
    [
      "cea9e09582b17cad"
    ]
  ],
  "_order": 590
}

module.exports = Node;