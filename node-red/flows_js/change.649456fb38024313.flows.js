const Node = {
  "id": "649456fb38024313",
  "type": "change",
  "z": "1e8ab76213a40efe",
  "name": "Metric template",
  "rules": [
    {
      "t": "set",
      "p": "metrics.values.displayname",
      "pt": "msg",
      "to": "Kommunernes Pensionssystem",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "metrics.values.name",
      "pt": "msg",
      "to": "status_kp",
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
      "to": "KP_URL",
      "tot": "env",
      "dc": true
    },
    {
      "t": "set",
      "p": "metrics.values.comment",
      "pt": "msg",
      "to": "This metric mesures web availability status on KP",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 520,
  "y": 220,
  "wires": [
    [
      "7e263e94bbeb2e08"
    ]
  ],
  "_order": 471
}

module.exports = Node;