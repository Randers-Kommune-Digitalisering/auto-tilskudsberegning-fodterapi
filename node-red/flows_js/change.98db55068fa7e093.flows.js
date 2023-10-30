const Node = {
  "id": "98db55068fa7e093",
  "type": "change",
  "z": "1e8ab76213a40efe",
  "name": "Metric template",
  "rules": [
    {
      "t": "set",
      "p": "metrics.values.displayname",
      "pt": "msg",
      "to": "WorkLet",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "metrics.values.name",
      "pt": "msg",
      "to": "status_worklet",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "metrics.values.type",
      "pt": "msg",
      "to": "gauge",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "metrics.values.phase",
      "pt": "msg",
      "to": "extract",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "metrics.values.datasource",
      "pt": "msg",
      "to": "https://workletnew.snapp.dk/",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "metrics.values.comment",
      "pt": "msg",
      "to": "\"This metric mesures web availability status on \" & $flowContext(\"metrics.values.datasource\")",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 520,
  "y": 140,
  "wires": [
    [
      "878e53f437fe7500"
    ]
  ],
  "_order": 398
}

module.exports = Node;