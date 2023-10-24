const Node = {
  "id": "3b224057a6ddf365",
  "type": "change",
  "z": "1e8ab76213a40efe",
  "name": "Metric value",
  "rules": [
    {
      "t": "set",
      "p": "metrics.values.value",
      "pt": "msg",
      "to": "statusCode = 200 ? 1 : 0",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "metrics.values.message",
      "pt": "msg",
      "to": "$number(metrics.values.value) = 1\t?\t    \"KP is available\"\t:   \"KP is unavailable\"",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 930,
  "y": 220,
  "wires": [
    [
      "7d8b672f8473813d",
      "02c5db6da489bbee"
    ]
  ],
  "_order": 403
}

module.exports = Node;