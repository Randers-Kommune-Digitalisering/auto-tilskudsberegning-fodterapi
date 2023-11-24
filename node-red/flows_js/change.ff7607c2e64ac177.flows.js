const Node = {
  "id": "ff7607c2e64ac177",
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
      "to": "$number(metrics.values.value) = 1\t?\t    \"WorkLet is available\"\t:   \"WorkLet is unavailable\"",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 930,
  "y": 140,
  "wires": [
    [
      "3573923fe9d7bdc2",
      "02c5db6da489bbee"
    ]
  ],
  "_order": 410
}

module.exports = Node;