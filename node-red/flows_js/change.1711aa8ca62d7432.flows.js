const Node = {
  "id": "1711aa8ca62d7432",
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
      "to": "sftp.testserver01.dk",
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
      "to": "$random()>0.5?1:0",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "metrics.values.message",
      "pt": "flow",
      "to": "$number($flowContext(\"metrics.values.value\"))>0.5?\"Last file transfer succesfull\":\"Last file transfer failed\"",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 380,
  "y": 120,
  "wires": [
    [
      "cea9e09582b17cad"
    ]
  ],
  "_order": 694
}

module.exports = Node;